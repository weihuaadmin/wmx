//index.js
//获取应用实例
const app = getApp()
wx.setNavigationBarTitle({
  title: '外卖机器人'
})
Page({
  data: {
    navbarHeight: wx.getSystemInfoSync().statusBarHeight + wx.getMenuButtonBoundingClientRect().height + 2 * (wx.getMenuButtonBoundingClientRect().top - wx.getSystemInfoSync().statusBarHeight) + "px",
    menu: [["早饭", "面包 蛋糕 荷包蛋 烧饼 饽饽 肉夹馍 油条 馄饨 火腿 面条 小笼包 玉米粥 肉包 煎饼果子 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥".split(" ")], ["午饭", "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 水饺 日本料理 涮羊肉 味千拉面 面包 扬州炒饭 自助餐 菜饭骨头汤 茶餐厅 海底捞 西贝莜面村 披萨 麦当劳 KFC 汉堡王 卡乐星 兰州拉面 沙县小吃 烤鱼 烤肉 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 全家便当".split(" ")], ["晚饭", "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 水饺 日本料理 涮羊肉 味千拉面 面包 扬州炒饭 自助餐 菜饭骨头汤 茶餐厅 海底捞 西贝莜面村 披萨 麦当劳 KFC 汉堡王 卡乐星 兰州拉面 沙县小吃 烤鱼 烤肉 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 全家便当".split(" ")]],
    menuIdx: new Date().getHours < 9 || new Date().getHours >= 23 ? 0 : new Date().getHours < 13 ? 1 : 2,
    doubi: "冰箱 书桌 电扇 空调 马桶 翔 鼠标 键盘 显示器 电视 台灯 饭盒 iPad iPhone 手机 餐巾纸 电话 椅子 纸箱 窗帘 插座 被单 报纸 杂志 相框 照片 衣服 内裤 内衣 袜子 妹子 汉子 砖头 混凝土 钢筋 塑料袋 衣架 书 手环 手表 鼠标垫 眼药水 跑车 自行车 三轮车 坦克 潜水艇 飞机 火箭 U盘 CPU 显卡 刀片 碎玻璃 圆珠笔 钢笔 交通卡 银行卡 身份证 户口簿 橡皮筋 双面胶 502胶水 订书机 螺丝刀 锤子 榔头 垃圾桶 花花草草 树皮 洗手液 妇炎洁 姨妈巾 哆啦A梦 仙人掌 企鹅 大熊猫 穿山甲 米老鼠 唐老鸭 跳跳虎 旅行箱 DVD 音响 热水器 热水袋 电热棒 电池 充电器 相机 自拍杆 耳机 吊灯 雨伞 钱包 鞋子 人字拖 床垫 绣花针 戒指 窨井盖 路灯 主板 程序猿 工程狮 电线 摄像头 西北风 生活 路由器 洗手液 沐浴露 肥皂 羽毛球拍 保龄球 皮带 皮鞭 电池 牙膏 手电筒 瑜伽垫 假发 82年的自来水 马蜂窝 瑞士军刀 地板 水管 电钻".split(" "),
    os: "大哥，饶命啊大哥 吃吃吃，就知道吃 壮士，干了这碗热翔 就这，还不够我塞牙缝儿 莫慌，抱紧我 吃一个，长一斤 你帅你先吃 你胖你先吃 听说吃这玩意吃不胖 你先吃，我不饿 不吃不是中国人 配上鸡汤，口味更佳 我仿佛看到了盐水瓶 嗯，好吃么？ 饭后注意漱口哦 这菜红烧味道如何？ 饭后百步走，活到九十九 分享页面到朋友圈，可以获得30个QQ太阳 据说吃完99%都哭了 惊天内幕！这网页是逗你玩的 为了身边的朋友！！转！！！！ 我也是醉了 我想静静，不要问我静静是谁 解决吃什么难题哪家强？ 我就笑笑不说话 转发过100，然并卵 活到老，吃到老 我给你讲个笑话 你别哭喔 你知道怎样得精神分裂症吗？那样我就再不是一个人了。 天下没有不散的筵席。我都还没吃完，你们都走了。 吃不到的醋，最酸。 躲了一辈子的雨，雨会不会很难过 小猪一定不知道自己的肉很好吃吧，真替它们心酸。 作为一个胖子，居然还自称自己不是个粗人！ 心情不好就吃吃吃 念念不忘，必会下单 好吃不如饺子，好玩不过嫂子 别低头，哈喇子会掉 今晚我们都是吃货 我这叫圆润，不叫胖 这不叫胖，叫丰满！ 吃饭前记得用手机消消毒 集满20个赞，明天早起瘦10斤 好吃的不要不要的 不好吃，不要钱 吃的我蹲下起立就头晕 听说你是广东人？ 贝爷，卒。".split(" "),
    menuValue: "",
    showMenu: false,
    type: "human",
    foods: [],
    tempFoods: [],
    restaurants: [],
    status: "idle",
    food: "神马",
    punctuation: "？",
    btnText: "开始",
    titleAnimationData: {}
  },
  components: {},
  props: {},
  onLoad: function (t) {
    var e = this;
    this.module_name = app.globalData.module_name;
    var a = t;
    wx.setStorageSync("invite_uid", a.uid), wx.setStorageSync("tabbar", 0);
    var i = this;
    this.methods.loadsetting(), wx.login({
      success: function (t) {
        e.wxCode = t.code;
        t = t.code;
        app.globalData.util.request({
          url: "auth/session/openid",
          data: {
            code: t
          },
          cachetime: 0,
          success: function (t) {
            var e;
            t.data.errno || (wx.setStorageSync("openid", t.data.data.openid), wx.setStorageSync("unionid", t.data.data.userinfo.unionid),
              e = t.data.data.openid, t.data.data.userinfo.unionid, t = app.globalData.util.url("entry/wxapp/api", {
                m: app.globalData.module_name,
                o: "userinfo"
              }), wx.request({
                url: t,
                method: "GET",
                data: {
                  openid: e,
                  invite_uid: wx.getStorageSync("invite_uid")
                },
                success: function (t) {
                  t = app.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                  t.openid && (wx.setStorageSync("userinfo", t.userinfo), wx.setStorageSync("pid_use_time", t.pid_time),
                    console.log(wx.getStorageSync("pid_time")), console.log(wx.getStorageSync("pid_use_time")),
                    wx.getStorageSync("pid_time") != wx.getStorageSync("pid_use_time") && (wx.setStorageSync("elmwm_url", ""),
                      wx.setStorageSync("elmsc_url", ""), wx.setStorageSync("elmwmposter", ""), wx.setStorageSync("elmscposter", ""),
                      wx.setStorageSync("pid_time", wx.getStorageSync("pid_use_time"))), i.systemtype = wx.getStorageSync("systemtype"));
                }
              }));
          }
        });
      }
    });
    const storFoods = wx.getStorageSync("menu-" + this.data.menuIdx);
    if (storFoods) {
      this.setData({
        foods: storFoods
      });
    } else {
      this.setData({
        foods: this.data.menu[this.data.menuIdx][1]
      });
    }

  },
  onShareAppMessage: function (res) {

    if (res.from === 'button') {
      console.log("来自页面内按钮分享")
    }
    var t = this.data.menu[this.data.menuIdx][0];
    return wx.reportAnalytics("share", {
      type: this.data.type,
      food: this.food,
      time: t
    }), {
      title: "神马" === this.data.food ? "今天吃神马？这是一个能解决你的人生一大困扰的小程序！" : "今天" + t + "吃" + this.data.food + "！这个小程序解决了我人生的一大困扰啊！",
      imageUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-cb8kewmgukg3d43fa6/d14bf9c0-5ae5-11eb-918d-3d24828c498c.jpg",
      path: 'pages/eatwhat/index'
    };
  },
  onShareTimeline: function () {
    var t = this.data.menu[this.data.menuIdx][0];
    return {
      title: "神马" === this.data.food ? "今天吃神马？这是一个能解决你的人生一大困扰的小程序！" : "今天" + t + "吃" + this.data.food + "！这个小程序解决了我人生的一大困扰啊！",
      imageUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-cb8kewmgukg3d43fa6/d14bf9c0-5ae5-11eb-918d-3d24828c498c.jpg",
      path: '/pages/eatwhat/index'
    }
  },
  play: function () {
    var a = this;
    if ("running" === this.data.status) clearTimeout(this.timer), this.setData({
      status: "done",
      punctuation: "！",
      btnText: "换一个"
    }), "monster" === this.data.type && wx.showToast({
      title: this.os[this.random(this.os.length - 1)],
      icon: "none"
    }); else {
      var e = 1;
      this.setData({
        status: "running",
        tempFoods: [],
        punctuation: "？"
      });
      !function n() {
        var i,
          s = a.data.foods[a.methods.random(a.data.foods.length - 1)];
        a.setData((i = {}, a.methods.t(i, "tempFoods[" + a.data.tempFoods.length + "]", {
          id: e,
          food: s,
          top: a.methods.random(100, 0) + "%",
          left: a.methods.random(100, 0) + "%",
          fontSize: a.methods.random(37, 14) + "px",
          color: "rgba(0,0,0," + a.methods.random(7, 3) / 10 + ")"
        }), a.methods.t(i, "food", s), a.methods.t(i, "btnText", "停"), i)), e++, a.timer = setTimeout(n, 60);
      }();
    }
  },
  getLuckyMoney: function () {
    wx.switchTab({
      url: '/pages/index/index'//实际路径要写全
    });
  },
  changeType: function (t) {
    var a = t.target.dataset.type;
    a !== this.data.type && (this.setData({
      type: a,
      food: "神马",
      punctuation: "？",
      btnText: "开始",
      foods: "human" === a ? this.data.menu[this.data.menuIdx][1] : this.data.doubi,
      restaurants: []
    }), wx.showToast({
      title: "monster" == a ? "注意！前方高能！" : "还是人类好吃呢Ψ(￣∀￣)Ψ",
      icon: "none"
    }), wx.reportAnalytics("toggle_type", {
      type: a
    }));
  },
  changeTime: function (t) {
    if ("running" !== this.data.status) {
      var a = "number" == typeof t ? t : (this.data.menuIdx + 1) % this.data.menu.length;
      this.setData({
        menuIdx: a,
        foods: this.data.menu[a][1],
        food: "神马",
        punctuation: "？",
        btnText: "开始",
        restaurants: []
      }), this.animation = wx.createAnimation({
        duration: 70,
        timingFunction: "linear"
      });

      for (var e = [5, -10, 15, -20, 15, -10, 0], n = 0; n < e.length; n++) this.animation.translateX(e[n]).step();

      this.setData({
        titleAnimationData: this.animation.export()
      }), wx.reportAnalytics("toggle_time", {
        time: this.data.menu[this.data.menuIdx][0]
      });
    }
  },
  searchRestaurants: function (t, e) {
    return new Promise(function (n, i) {
      a.search({
        location: t,
        keyword: "美食",
        page_size: 20,
        page_index: e,
        success: n,
        fail: i
      });
    });
  },
  showLocationMenu: function () {
    var t = this;
    wx.showActionSheet({
      itemList: ["获取附近餐厅", "手动定位地址"],
      success: function (a) {
        switch (a.tapIndex) {
          case 0:
            t.getRestaurants();
            break;

          case 1:
            wx.chooseLocation({
              success: t.getRestaurants
            });
        }

        wx.reportAnalytics("get_restaurants", {
          type: 0 === a.tapIndex ? "nearby" : "locate"
        });
      }
    });
  },
  getRestaurants: function (t) {
    var a = this;
    wx.showLoading({
      title: t ? "搜索美食中…" : "获取附近美食…",
      mask: !0
    }), Promise.all(Array.from({
      length: 3
    }, function (e, n) {
      return a.searchRestaurants(t, n + 1);
    })).then(function (t) {
      var e = t.reduce(function (t, a) {
        return t.concat(a.data);
      }, []);

      a.setData({
        type: "human",
        food: "神马",
        punctuation: "？",
        btnText: "开始",
        restaurants: e,
        foods: e.map(function (t) {
          return t.title;
        }),
        status: "idle"
      }), setTimeout(function () {
        wx.showToast({
          title: "菜单已更新"
        });
      }, 10);
    }, function (t) {
      setTimeout(function () {
        wx.showToast({
          title: JSON.stringify(t),
          icon: "none"
        });
      }, 10);
    }).then(function () {
      return wx.hideLoading();
    });
  },
  showRestaurant: function () {
    var t = this,
      a = this.data.restaurants.find(function (a) {
        return a.title === t.data.food;
      });
    wx.openLocation({
      latitude: a.location.lat,
      longitude: a.location.lng,
      name: a.title,
      address: a.address
    });
  },
  editMenu: function () {
    this.setData({
      showMenu: true,
      menuValue: (this.data.restaurants.length ? this.data.restaurants.map(function (t) {
        return t.title;
      }) : "human" === this.data.type ? this.data.menu[this.data.menuIdx][1] : this.data.doubi).join(" ")
    });
  },
  handleFormSubmit: function (t) {
    var a = t.detail.value.textarea.trim();
    if (a) {
      this.setData({
        showMenu: false,
        foods: a.split(" ")
      });
      wx.setStorage({
        key: "menu-" + this.data.menuIdx,
        data: a.split(" ")
      });
    } else {
      wx.showToast({
        title: "啥也没有，吃西北风去啊？",
        icon: "none"
      });
    }
  },
  methods: {
    loadSwiperitems: function () {
      var e = this, t = app.globalData.util.url("entry/wxapp/api", {
        m: app.globalData.module_name,
        o: "ad"
      });
      wx.request({
        url: t,
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          cateid: 1,
          openid: wx.getStorageSync("openid")
        },
        success: function (t) {
          t = app.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
          e.swiperItems = t.data.swiperitems, wx.stopPullDownRefresh();
        }
      });
    },
    loadWaimaidaohang: function () {
      var e = this, t = app.globalData.util.url("entry/wxapp/api", {
        m: app.globalData.module_name,
        o: "waimaidaohang"
      });
      wx.request({
        url: t,
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          openid: wx.getStorageSync("openid")
        },
        success: function (t) {
          t = app.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
          e.waimaidaohang = t.data.waimaidaohang;
        }
      });
    },
    loadWaimailist: function () {
      var e = this, t = app.globalData.util.url("entry/wxapp/api", {
        m: app.globalData.module_name,
        o: "waimailist"
      });
      wx.request({
        url: t,
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          openid: wx.getStorageSync("openid")
        },
        success: function (t) {
          t = app.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
          e.waimailist = t.data.waimailist;
        }
      });
    },
    loadsetting: function () {
      var e = this, t = app.globalData.util.url("entry/wxapp/api", {
        m: app.globalData.module_name,
        o: "setting"
      });
      wx.request({
        url: t,
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          openid: wx.getStorageSync("openid")
        },
        success: function (t) {
          t = app.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
          wx.setStorageSync("setting", t.setting), e.setting = wx.getStorageSync("setting"),
            e.systemtype = wx.getStorageSync("systemtype"), 3 == wx.getStorageSync("setting").index_type && (wx.setNavigationBarTitle({
              title: wx.getStorageSync("setting").waimaitt_navigationBarTitleText
            }), wx.setNavigationBarColor({
              backgroundColor: wx.getStorageSync("setting").waimaitt_navigationBarBackgroundColor,
              frontColor: wx.getStorageSync("setting").waimaitt_navigationBarTextStyle
            })), 4 == wx.getStorageSync("setting").index_type && (wx.setNavigationBarTitle({
              title: wx.getStorageSync("setting").waimainew_navigationBarTitleText
            }), wx.setNavigationBarColor({
              backgroundColor: wx.getStorageSync("setting").waimainew_navigationBarBackgroundColor,
              frontColor: wx.getStorageSync("setting").waimainew_navigationBarTextStyle
            })), 2 == wx.getStorageSync("setting").index_type && (wx.setNavigationBarTitle({
              title: wx.getStorageSync("setting").waimai_navigationBarTitleText
            }), wx.setNavigationBarColor({
              backgroundColor: wx.getStorageSync("setting").waimai_navigationBarBackgroundColor,
              frontColor: wx.getStorageSync("setting").waimai_navigationBarTextStyle
            })), 1 == wx.getStorageSync("setting").index_type && (wx.setNavigationBarTitle({
              title: wx.getStorageSync("setting").card_navigationBarTitleText
            }), wx.setNavigationBarColor({
              backgroundColor: wx.getStorageSync("setting").card_navigationBarBackgroundColor,
              frontColor: wx.getStorageSync("setting").card_navigationBarTextStyle
            })), e.loadSwiperitems(), e.loadWaimaidaohang(), e.loadWaimailist();
        }
      });
    },
    t: function (t, a, e) {
      return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[a] = e, t;
    },
    random: function (t, a) {
      return t = t || 100, a = a || 0, Math.floor(Math.random() * (t - a + 1)) + a;
    },
    handleAnimationEnd: function (t) {
      var a = Number(t.target.dataset.id);
      this.data.tempFoods.splice(this.data.tempFoods.findIndex(function (t) {
        return t.id === a;
      }), 1), this.setData({
        tempFoods: this.data.tempFoods
      });
    },
  }
})
