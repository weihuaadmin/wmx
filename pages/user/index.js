(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/index" ], {
    "21f4": function(t, o, n) {
        (function(i) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var r = getApp(), e = n("e5c8"), t = {
                data: function() {
                    return {
                        module_name: r.globalData.module_name,
                        showAlert_login: !1,
                        showAlert: !1,
                        contact_title: "",
                        top: 160,
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        pageLoading: !0,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        showToast_login: !1,
                        user_income: {
                            today: 0,
                            month: 0,
                            last_month: 0
                        },
                        tools: [],
                        footerCurrent: 0,
                        show_poster: !1,
                        qrcode: "",
                        myqrcode: "",
                        myposter: "",
                        width: 750,
                        height: 1334,
                        widthIn: 300,
                        heightIn: 500,
                        bgColor: "#7ACBDC",
                        bgImg: "",
                        imgSrc: null,
                        rpx2px: 1,
                        context: null,
                        multiple: 2.1
                    };
                },
                components: {
                    gracePage: function() {
                        n.e("graceUI/components/gracePage").then(function() {
                            return resolve(n("1021"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceLoading: function() {
                        n.e("graceUI/components/graceLoading").then(function() {
                            return resolve(n("1d04"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceFullLoading: function() {
                        n.e("graceUI/components/graceFullLoading").then(function() {
                            return resolve(n("3be5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceEmptyNew: function() {
                        n.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(n("f8df"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceDialog: function() {
                        n.e("graceUI/components/graceDialog").then(function() {
                            return resolve(n("f85d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceFlex: function() {
                        n.e("graceUI/components/graceFlex").then(function() {
                            return resolve(n("b5c9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {},
                onShow: function() {
                    this.userinfo = i.getStorageSync("userinfo"), this.load_myqrcode2();
                },
                onPullDownRefresh: function() {
                    this.user_info(), this.loadtools(), this.load_myqrcode(), this.load_income();
                },
                onLoad: function() {
                    this.module_name = r.globalData.module_name, this.loadtools(), this.setting = i.getStorageSync("setting"), 
                    this.userinfo = i.getStorageSync("userinfo"), this.setting = i.getStorageSync("setting"), 
                    1 == this.setting.income_type && (this.top = 110), this.myqrcode = i.getStorageSync("myqrcode"), 
                    this.myposter = i.getStorageSync("myposter"), this.bgImg = i.getStorageSync("setting").myposter ? i.getStorageSync("setting").myposter : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                    this.user_info(), this.load_myqrcode(), this.load_income();
                },
                methods: {
                    showDialog1: function() {
                        this.$refs.showAlert_taobaoauth.open();
                    },
                    closeDialog1: function() {
                        this.$refs.showAlert_taobaoauth.hide();
                    },
                    showDialog3: function() {
                        this.$refs.showAlert.open();
                    },
                    closeDialog3: function() {
                        this.$refs.showAlert.hide();
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    findorder_do: function(t) {
                        var e = this, o = t.detail.value;
                        o.orderno ? (t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "findorder"
                        }), i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid"),
                                orderno: o.orderno
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t.data), 1 == t.data ? (i.showToast({
                                    title: "订单找回成功",
                                    icon: "none"
                                }), e.load_income()) : 2 == t.data ? i.showToast({
                                    title: "该订单已结算，无法找回",
                                    icon: "none"
                                }) : i.showToast({
                                    title: "未找到该订单",
                                    icon: "none"
                                });
                            }
                        })) : i.showToast({
                            title: "请输入订单号",
                            icon: "none"
                        });
                    },
                    user_info: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "userinfo"
                        });
                        i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid"),
                                invite_uid: i.getStorageSync("invite_uid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.openid && (i.setStorageSync("userinfo", t.userinfo), e.userinfo = t.userinfo);
                            }
                        });
                    },
                    close_poster: function() {
                        this.show_poster = !1;
                    },
                    load_income: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "user_income"
                        });
                        i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), e.user_income = t.data, i.stopPullDownRefresh();
                            }
                        });
                    },
                    previewImage: function(t) {
                        i.previewImage({
                            urls: [ t.currentTarget.dataset.src ],
                            current: 0
                        });
                    },
                    load_myqrcode: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "my",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.poster_url ? (e.myqrcode = t.data, i.setStorageSync("myqrcode", t.data), i.setStorageSync("myposter", t.poster_url)) : e.myqrcode = "../../static/images/mtwm.png";
                            }
                        });
                    },
                    load_myqrcode2: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "my",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.poster_url ? i.setStorageSync("myposter", t.poster_url) : e.myqrcode = "../../static/images/mtwm.png";
                            }
                        });
                    },
                    getposter_mtwm: function() {
                        var e;
                        i.getStorageSync("userinfo").nickname ? i.getStorageSync("myposter") && -1 != i.getStorageSync("myposter").indexOf("mp.weixin") ? i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(i.getStorageSync("myposter"))
                        }) : (e = this, i.getStorageSync("myposter") ? i.getImageInfo({
                            src: i.getStorageSync("myposter"),
                            success: function(t) {
                                console.log(t), e.show_poster = !0, e.imgSrc = i.getStorageSync("myposter");
                            },
                            fail: function(t) {
                                i.showLoading({
                                    title: "加载中...",
                                    mask: !0
                                }), e.show_poster = !0, e.context = i.createCanvasContext("graceCanvas"), e.initSize(), 
                                setTimeout(function() {
                                    e.draw();
                                }, 1e3);
                            }
                        }) : (i.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), e.show_poster = !0, e.context = i.createCanvasContext("graceCanvas"), e.initSize(), 
                        setTimeout(function() {
                            e.draw();
                        }, 1e3)), this.qrcode = this.myqrcode) : this.showDialog2();
                    },
                    initSize: function() {
                        var t = e.system();
                        this.rpx2px = t.rpx2px, this.widthIn = i.upx2px(this.width) * this.multiple, this.heightIn = i.upx2px(this.height) * this.multiple;
                    },
                    draw: function() {
                        var t = this;
                        this.step01(), "" != this.bgImg ? this.drawBGIMG(this.bgImg, function() {
                            t.step03();
                        }) : this.step03();
                    },
                    step01: function() {
                        this.context.setFillStyle(this.bgColor), this.context.fillRect(0, 0, this.widthIn, this.heightIn);
                    },
                    step03: function() {
                        var a = this;
                        i.downloadFile({
                            url: this.qrcode,
                            success: function(t) {
                                var e, o, n;
                                200 === t.statusCode && (console.log("ok"), o = i.getStorageSync("setting").myposter_qrcode ? i.getStorageSync("setting").myposter_qrcode : 350, 
                                n = i.getStorageSync("setting").myposter_qrcodex ? i.getStorageSync("setting").myposter_qrcodex : 0, 
                                e = i.getStorageSync("setting").myposter_qrcodey ? i.getStorageSync("setting").myposter_qrcodey : 615, 
                                o = i.upx2px(o) * a.multiple, n = i.upx2px(n) * a.multiple, n = (a.widthIn - o + n) / 2, 
                                a.context.drawImage(t.tempFilePath, n, a.heightIn - i.upx2px(e) * a.multiple, o, o), 
                                a.drawIt());
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    drawText: function(t, e, o, n, a, i) {
                        this.context.setFontSize(a), this.context.setFillStyle(n), this.context.setTextAlign(i), 
                        this.context.fillText(t, e, o);
                    },
                    drawIt: function() {
                        var e = this;
                        this.imgSrc = "", this.show_poster = !1, this.context.draw(!0, function() {
                            i.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: e.widthIn,
                                height: e.heightIn,
                                destWidth: e.widthIn,
                                destHeight: e.heightIn,
                                canvasId: "graceCanvas",
                                success: function(t) {
                                    console.log(t), e.myposter = t.tempFilePath, e.imgSrc = t.tempFilePath, e.show_poster = 1, 
                                    i.setStorageSync("myposter", t.tempFilePath), setTimeout(function() {
                                        i.hideLoading();
                                    }, 1e3);
                                },
                                fail: function(t) {
                                    console.log(t), i.hideLoading(), i.showToast({
                                        title: "海报生成失败",
                                        icon: "none"
                                    });
                                }
                            });
                        });
                    },
                    drawBGIMG: function(t, o) {
                        var n = this;
                        i.downloadFile({
                            url: t,
                            success: function(e) {
                                200 == e.statusCode && i.getImageInfo({
                                    src: e.tempFilePath,
                                    success: function(t) {
                                        t = n.widthIn / t.width * t.height;
                                        console.log(t), n.context.drawImage(e.tempFilePath, 0, 0, n.widthIn, t), o();
                                    }
                                });
                            }
                        });
                    },
                    userlogin: function() {
                        i.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(e) {
                        var o = this;
                        this.closeDialog2(), i.getSetting({
                            success: function(t) {
                                t.authSetting["scope.userInfo"] ? i.getUserInfo({
                                    success: function(t) {
                                        o.userAuth(e, t.userInfo, "login");
                                    }
                                }) : o.userAuth(e, null, "login");
                            }
                        });
                    },
                    getWxCode: function() {
                        var e = this;
                        wx.login({
                            success: function(t) {
                                e.wxCode = t.code;
                            }
                        });
                    },
                    userAuth: function(o, t, n) {
                        var a = this;
                        "getUserInfo:ok" == o.detail.errMsg ? wx.login({
                            success: function(t) {
                                var e = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "userinfo"
                                }), t = {
                                    code: t.code,
                                    encryptedData: o.detail.encryptedData,
                                    iv: o.detail.iv,
                                    openid: i.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                i.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: t,
                                    success: function(t) {
                                        1 == t.data.status ? (t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                        t = JSON.parse(t), i.setStorageSync("userinfo", t.userinfo), a.userinfo = t.userinfo, 
                                        "login" == n && (a.closeDialog2(), i.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        }), a.load_myqrcode())) : i.showToast({
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
                    info: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "info"
                        }) : this.showDialog2();
                    },
                    ranking: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "ranking"
                        }) : this.showDialog2();
                    },
                    myfans: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "fans?op=myfans"
                        }) : this.showDialog2();
                    },
                    otherfans: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "fans?op=otherfans"
                        }) : this.showDialog2();
                    },
                    myorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=my"
                        }) : this.showDialog2();
                    },
                    findorder: function() {
                        i.getStorageSync("userinfo").nickname ? this.showDialog1() : this.showDialog2();
                    },
                    cash: function() {
                        i.getStorageSync("userinfo").nickname ? 1 != i.getStorageSync("setting").income_type && i.navigateTo({
                            url: "account"
                        }) : this.showDialog2();
                    },
                    fansorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=fans"
                        }) : this.showDialog2();
                    },
                    wjsorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=wjs"
                        }) : this.showDialog2();
                    },
                    yjsorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=yjs"
                        }) : this.showDialog2();
                    },
                    todayorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=today"
                        }) : this.showDialog2();
                    },
                    monthorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=month"
                        }) : this.showDialog2();
                    },
                    lastmonthorder: function() {
                        i.getStorageSync("userinfo").nickname ? i.navigateTo({
                            url: "order?op=lastmonth"
                        }) : this.showDialog2();
                    },
                    loadtools: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "ad"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                cateid: 9,
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.tools = t.data.swiperitems;
                            }
                        });
                    },
                    opentools: function(t) {
                        if (i.getStorageSync("userinfo").nickname) {
                            if (1 == t.currentTarget.dataset.is_ios && "ios" == i.getStorageSync("systemtype") && 0 == i.getStorageSync("setting").ios) {
                                var e = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return i.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: t.currentTarget.dataset.adid,
                                        openid: i.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, this.contact_title = t.currentTarget.dataset.title, 
                                this.contact_title_text = "暂不支持购买", this.contact_title_desc = "苹果iOS系统手机暂不支持购买，请分享给非iOS系统的微信购买！", 
                                this.contact_thumb = i.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 != t.currentTarget.dataset.adtype || 0 != t.currentTarget.dataset.appid_type) if (5 != t.currentTarget.dataset.adtype) {
                                if (4 == t.currentTarget.dataset.adtype) return -1 != t.currentTarget.dataset.url.indexOf("news") ? void i.switchTab({
                                    url: t.currentTarget.dataset.url
                                }) : void i.navigateTo({
                                    url: t.currentTarget.dataset.url
                                });
                                2 != t.currentTarget.dataset.adtype && 3 != t.currentTarget.dataset.adtype || (e = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "ad_kefubind"
                                }), i.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: t.currentTarget.dataset.adid,
                                        openid: i.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, 
                                this.contact_title = t.currentTarget.dataset.title, this.contact_title_text = t.currentTarget.dataset.title_text, 
                                this.contact_title_desc = t.currentTarget.dataset.title_desc, this.contact_thumb = i.getStorageSync("setting").dianwo, 
                                this.showDialog3());
                            } else i.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(t.currentTarget.dataset.url)
                            }); else i.navigateToMiniProgram({
                                appId: t.currentTarget.dataset.appid,
                                path: t.currentTarget.dataset.path
                            });
                        } else this.showDialog2();
                    }
                }
            };
            o.default = t;
        }).call(this, n("543d").default);
    },
    "306b": function(t, e, o) {
        o.r(e);
        var n, a = o("8f62"), i = o("d6a0");
        for (n in i) "default" !== n && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(n);
        o("e912");
        var r = o("f0c5"), a = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = a.exports;
    },
    "8f62": function(t, e, o) {
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    d637: function(t, e, o) {},
    d6a0: function(t, e, o) {
        o.r(e);
        var n, a = o("21f4"), i = o.n(a);
        for (n in a) "default" !== n && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = i.a;
    },
    e912: function(t, e, o) {
        var n = o("d637");
        o.n(n).a;
    },
    ec9a: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("0cda"), e(o("66fd")), t(e(o("306b")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "ec9a", "common/runtime", "common/vendor" ] ] ]);