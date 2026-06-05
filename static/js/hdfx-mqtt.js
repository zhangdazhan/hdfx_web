/**
 * HDFX MQTT 实时推送客户端 — 纯推送模式
 *
 * 流程:
 *   1. 用户登录后，用 account__password 作为 clientId 连接 MQTT
 *   2. 页面 fetchData() → XHR 拦截 → 订阅 hdfx/{client_key}/{data_type} + 发请求
 *   3. Publisher 收到请求 → 从 DB 读取用户配置 → 计算 → 推送 URL
 *   4. 用户设置变化时 → 发布配置到 hdfx/config/{client_key}
 *
 * Topic 格式:
 *   订阅数据:   hdfx/{client_key}/{data_type}
 *   发送请求:   hdfx/req/{client_key}/{data_type}
 *   发送配置:   hdfx/config/{client_key}
 *   保存确认:   hdfx/save_ack/{client_key} (按需订阅, 收到/超时即释放)
 */
(function () {
  "use strict";

  var BROKER_URL = "wss://b4140bbf.ala.cn-hangzhou.emqxsl.cn:8084/mqtt";
  var USERNAME = "hdfx_user";
  var PASSWORD = "7PXn6TwEubtK7B5";
  var FALLBACK_TIMEOUT = 8000;

  // ─── 用户凭证 (登录后设置) ───
  var clientKey = "";     // account, 如 "hdfx_w3hIeTPr"
  var clientPass = "";    // password, 如 "VDb6LGevP9e5"
  var CLIENT_ID = "";     // account__password

  var API_TYPE_MAP = {
    "/water/getBasketballData": "bk_chuan",
    "/water/getBsktQBData":    "bk_qb",
    "/water/getFootballData":  "ft_chuan",
    "/water/getFtQBData":      "ft_qb",
    "/water/getFtTotalGoal":   "ft_goal",
    "/water/getFtBQC":         "ft_bqc"
  };

  var client = null;
  var connected = false;
  var connectPromise = null;
  var currentSubs = {};
  var pendingRequests = {};
  var dataCache = {};
  var activeXhrRef = {};
  var _userInfo = null;

  // ─── 登录 & 连接 ───
  // _authCallback: 登录时的 resolve/reject 回调
  var _authResolve = null;
  var _authReject = null;
  var _authTimer = null;

  // ─── 计算请求状态 (订阅模式) ───
  var _calcSubscribedTopic = null;
  var _calcResolve = null;
  var _calcReject = null;
  var _calcTimer = null;
  var CALC_TIMEOUT = 15000;

  function _encodeParams(params) {
    // URL-safe base64 编码
    return btoa(unescape(encodeURIComponent(JSON.stringify(params))))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  /**
   * 发起计算请求 (通过订阅传参, 不 publish)
   * 前端订阅 hdfx/{ck}/calc_sin/{b64_params}
   * Publisher 检测到订阅后计算并 publish 结果到同一 topic
   */
  function calcRequest(calcType, params) {
    return new Promise(function (resolve, reject) {
      if (!client || !connected || !clientKey) {
        reject({ error: "MQTT 未连接" });
        return;
      }
      // 取消之前未完成的计算
      if (_calcReject) {
        _calcReject({ error: "被新计算取消" });
        clearTimeout(_calcTimer);
        if (_calcSubscribedTopic) client.unsubscribe(_calcSubscribedTopic);
      }

      var b64 = _encodeParams(params);
      var topic = "hdfx/" + clientKey + "/" + calcType + "/" + b64;

      _calcSubscribedTopic = topic;
      _calcResolve = resolve;
      _calcReject = reject;
      _calcTimer = setTimeout(function () {
        if (_calcReject) {
          var rej = _calcReject;
          _calcResolve = null;
          _calcReject = null;
          client.unsubscribe(topic);
          _calcSubscribedTopic = null;
          rej({ error: "计算超时" });
        }
      }, CALC_TIMEOUT);

      // 订阅 = 发起请求 (publisher 通过 EMQX API 检测)
      client.subscribe(topic, { qos: 1 });
      console.log("[HDFX-MQTT] 📡 计算订阅:", calcType);
    });
  }

  // ─── 方案管理请求 (plan CRUD via MQTT) ───
  var _planResolve = null, _planReject = null, _planTimer = null, _planTopic = null;
  var PLAN_TIMEOUT = 10000;

  function planRequest(action, params) {
    // 等待连接就绪后再发起请求
    function _doPlanRequest(resolve, reject) {
      if (!client || !connected || !clientKey) {
        reject({ error: "MQTT 未连接" });
        return;
      }
      // 取消之前未完成的请求
      if (_planReject) {
        _planReject({ error: "被新请求取消" });
        clearTimeout(_planTimer);
        if (_planTopic) client.unsubscribe(_planTopic);
      }

      var b64 = _encodeParams(params || {});
      var topic = "hdfx/" + clientKey + "/" + action + "/" + b64;

      _planTopic = topic;
      _planResolve = resolve;
      _planReject = reject;
      _planTimer = setTimeout(function () {
        if (_planReject) {
          var rej = _planReject;
          _planResolve = null;
          _planReject = null;
          client.unsubscribe(topic);
          _planTopic = null;
          rej({ error: "方案操作超时" });
        }
      }, PLAN_TIMEOUT);

      client.subscribe(topic, { qos: 1 });
      console.log("[HDFX-MQTT] 📋 方案请求:", action);
    }

    return new Promise(function (resolve, reject) {
      if (connected && client && clientKey) {
        _doPlanRequest(resolve, reject);
      } else if (connectPromise) {
        // 连接中，等连接完成后再执行
        connectPromise.then(function () {
          _doPlanRequest(resolve, reject);
        });
      } else {
        reject({ error: "MQTT 未连接" });
      }
    });
  }


  function login(account, password) {
    // 如果已有连接先断开
    if (client) {
      client.end(true);
      client = null;
      connected = false;
      connectPromise = null;
    }

    clientKey = account;
    clientPass = password;
    // clientId 加随机后缀，避免 EMQX 同 clientId 自动踢
    CLIENT_ID = account + "__" + password + "__" + Math.random().toString(36).substr(2, 6);
    // 保存凭证到 localStorage，刷新页面后自动重连
    try { localStorage.setItem("hdfx_account", account); localStorage.setItem("hdfx_password", password); } catch(e) {}
    console.log("[HDFX-MQTT] 🔑 登录:", account);

    return new Promise(function (resolve, reject) {
      _authResolve = resolve;
      _authReject = reject;

      // 15 秒超时
      _authTimer = setTimeout(function () {
        _authResolve = null;
        _authReject = null;
        reject({ reason: "连接超时，请检查网络" });
      }, 15000);

      connect();
    });
  }

  function connect() {
    if (client) return connectPromise;
    if (!CLIENT_ID) {
      return Promise.reject("未登录");
    }

    console.log("[HDFX-MQTT] 连接中...", BROKER_URL, "clientId=" + CLIENT_ID);

    connectPromise = new Promise(function (res) {
      client = mqtt.connect(BROKER_URL, {
        clientId: CLIENT_ID,
        username: USERNAME,
        password: PASSWORD,
        clean: true,
        reconnectPeriod: 5000,
        connectTimeout: 10000,
      });

      client.on("connect", function () {
        connected = true;
        console.log("[HDFX-MQTT] ✅ 已连接, clientId=" + CLIENT_ID);

        // 订阅鉴权结果（publisher 检测到连接后自动推送）
        client.subscribe("hdfx/auth/" + clientKey, { qos: 1 });
        // 订阅公共赛事信息 (JCInfos/HGInfos, 所有用户共享)
        client.subscribe("hdfx/public/ft_infos", { qos: 1 });
        client.subscribe("hdfx/public/bk_infos", { qos: 1 });

        // 重连后恢复数据订阅
        Object.keys(currentSubs).forEach(function (key) {
          client.subscribe("hdfx/" + key, { qos: 1 });
        });

        // console.log("[HDFX-MQTT] 等待 publisher 检测连接...");

        res();
      });

      client.on("message", onMessage);
      client.on("error", function (e) {
        console.error("[HDFX-MQTT] ❌", e.message);
        // 连接错误 → 拒绝登录
        if (_authReject) {
          clearTimeout(_authTimer);
          var rej = _authReject;
          _authResolve = null;
          _authReject = null;
          rej({ reason: "MQTT连接失败: " + e.message });
        }
      });
      client.on("close", function () {
        connected = false;
        console.warn("[HDFX-MQTT] ⚠️ 断连");
      });
      setTimeout(res, 10000);
    });
    return connectPromise;
  }

  // ─── 配置注入工具 ───
  var _pendingConfig = null;
  var _configRetryTimer = null;

  function _injectConfig(config) {
    var app = document.querySelector("#app");
    if (!app || !app.__vue__) {
      // Vue 还没就绪，缓存并重试
      _pendingConfig = config;
      _scheduleConfigRetry();
      return;
    }
    var root = app.__vue__;
    var layoutVm = null;
    var queue = [root];
    while (queue.length > 0) {
      var vm = queue.shift();
      if (vm.configData && vm.configData.JCPointSin !== undefined) {
        layoutVm = vm;
        break;
      }
      if (vm.$children) {
        for (var i = 0; i < vm.$children.length; i++) {
          queue.push(vm.$children[i]);
        }
      }
    }
    if (layoutVm) {
      Object.keys(config).forEach(function (k) {
        if (layoutVm.configData.hasOwnProperty(k)) {
          layoutVm.$set(layoutVm.configData, k, config[k]);
        }
      });
      if (config.JCPointSin !== undefined) layoutVm.JCPointSin = config.JCPointSin;
      if (config.JCPointChuan !== undefined) layoutVm.JCPointChuan = config.JCPointChuan;
      // console.log("[HDFX-MQTT] 📥 用户配置已应用到界面");
      _pendingConfig = null;
      if (_configRetryTimer) { clearInterval(_configRetryTimer); _configRetryTimer = null; }
    } else {
      // Layout 还没渲染，缓存并重试
      _pendingConfig = config;
      _scheduleConfigRetry();
    }
  }

  function _scheduleConfigRetry() {
    if (_configRetryTimer) return; // 已在重试中
    var retries = 0;
    _configRetryTimer = setInterval(function () {
      retries++;
      if (retries > 20 || !_pendingConfig) {
        clearInterval(_configRetryTimer);
        _configRetryTimer = null;
        return;
      }
      // console.log("[HDFX-MQTT] ⏳ 重试注入配置 (" + retries + "/20)...");
      _injectConfig(_pendingConfig);
    }, 500);
  }

  // 应用公共赛事信息 (JCInfos/HGInfos): 存全局 + 用已缓存数据的 profitRateMap 回填 profitRate +
  // 对"数据先到、infos 后到"的已缓存 ft/bk 数据重新触发 Vue 更新, 让页面补齐赛事信息。
  function _applyPublicInfos(infos, isFt) {
    if (!infos) return;
    if (isFt) window.__hdfx_ft_infos = infos;
    else window.__hdfx_bk_infos = infos;

    var pfx = isFt ? "ft_" : "bk_";
    if (infos.JCInfos) {
      for (var _ck in dataCache) {
        var _cdt = _ck.split("/")[1];
        if (_cdt && _cdt.indexOf(pfx) === 0 && dataCache[_ck].data && dataCache[_ck].data.profitRateMap) {
          var _prm = dataCache[_ck].data.profitRateMap;
          for (var _ii = 0; _ii < infos.JCInfos.length; _ii++) {
            var _mid = infos.JCInfos[_ii].matchId;
            if (_mid && _prm[_mid]) infos.JCInfos[_ii].profitRate = _prm[_mid];
          }
          break;
        }
      }
    }
    // 把 infos 回填进已缓存数据 (数据先到、infos 后到时缓存里 JCInfos/HGInfos 是空的),
    // 否则后续缓存命中重放的还是空 infos。
    for (var _dk in dataCache) {
      var _dkt = _dk.split("/")[1];
      if (_dkt && _dkt.indexOf(pfx) === 0 && dataCache[_dk].data) {
        var _cd = dataCache[_dk].data;
        if (!_cd.JCInfos || !_cd.JCInfos.length) _cd.JCInfos = infos.JCInfos || [];
        if (!_cd.HGInfos || !_cd.HGInfos.length) _cd.HGInfos = infos.HGInfos || [];
      }
    }
    // infos 晚于数据到达时, 当前订阅的同类型页面需要重新渲染才能拿到 JCInfos/HGInfos
    for (var _k in currentSubs) {
      var _dt = _k.split("/")[1];
      if (_dt && _dt.indexOf(pfx) === 0 && dataCache[_k]) {
        triggerVueUpdate(_k, dataCache[_k].data);
        break;
      }
    }
  }

  // ─── MQTT 消息处理 ───
  function onMessage(topic, message) {
    var parts = topic.split("/");

    // 鉴权结果: hdfx/auth/{client_key}
    if (parts.length === 3 && parts[1] === "auth") {
      try {
        var auth = JSON.parse(message.toString());
        if (auth.success) {
          console.log("[HDFX-MQTT] ✅ 鉴权成功:", auth.client_key);

          // 保存用户信息
          _userInfo = {
            name: auth.account || clientKey,
            account: auth.account || clientKey,
            role: auth.role || "user",
            avatar: auth.avatar || null,
            viptime: auth.expires_at || null,
            uuid: auth.uuid || clientKey,
          };
          try { localStorage.setItem("hdfx_userinfo", JSON.stringify(_userInfo)); } catch(e) {}

          // 如果 auth 消息携带了配置，直接注入
          if (auth.config && typeof auth.config === "object") {
            _injectConfig(auth.config);
          }

          // resolve 登录 Promise
          if (_authResolve) {
            clearTimeout(_authTimer);
            var res = _authResolve;
            _authResolve = null;
            _authReject = null;
            res({
              success: true,
              token: clientKey,
              viptime: auth.expires_at || "",
              role: "user",
              reason: auth.reason,
            });
          }
        } else {
          console.error("[HDFX-MQTT] ❌ 鉴权失败:", auth.reason);

          // 被挤下线的特殊处理（只有目标是自己才执行）
          if (auth.kicked && auth.target_clientId === CLIENT_ID) {
            _showNotification("warning", "⚠️ 账号异地登录", auth.reason || "您的账号在其他设备登录");
            // 清除凭证
            try {
              localStorage.removeItem("hdfx_account");
              localStorage.removeItem("hdfx_password");
              document.cookie.split(";").forEach(function(c) {
                document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
              });
            } catch(e) {}
            // 停止重连 + 2秒后跳登录页
            if (client) { client.options.reconnectPeriod = 0; }
            setTimeout(function() {
              if (window.location.hash !== "#/login") {
                window.location.hash = "#/login";
                window.location.reload();
              }
            }, 2000);
            return;
          }
          // 非目标的 kicked 消息，忽略
          if (auth.kicked) return;

          // reject 登录 Promise（如果是主动 login 流程）
          if (_authReject) {
            clearTimeout(_authTimer);
            var rej = _authReject;
            _authResolve = null;
            _authReject = null;
            rej({ reason: auth.reason || "授权失败" });
          } else {
            // 自动重连鉴权失败 → 清除凭证，强制跳登录页
            try {
              localStorage.removeItem("hdfx_account");
              localStorage.removeItem("hdfx_password");
              document.cookie.split(";").forEach(function(c) {
                document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
              });
            } catch(e) {}
            if (window.location.hash !== "#/login") {
              window.location.hash = "#/login";
              window.location.reload();
            }
          }

          // 停止重连
          if (client) {
            client.options.reconnectPeriod = 0;
          }
        }
      } catch (e) {}
      return;
    }

    // 保存配置 ACK: hdfx/save_ack/{client_key} — 收到后释放 save_ack 订阅与挂起的 save_config 订阅
    if (parts.length === 3 && parts[1] === "save_ack") {
      try {
        var sack = JSON.parse(message.toString());
        if (sack && sack.success) {
          console.log("[HDFX-MQTT] ✅ 配置已保存");
        } else {
          console.warn("[HDFX-MQTT] ⚠️ 配置保存失败:", sack && sack.msg);
        }
      } catch (e) {}
      _releaseAllSaveTopics();
      return;
    }

    // 计算结果: hdfx/{client_key}/calc_*/{b64_params} (订阅模式)
    if (parts.length === 4 && parts[0] === "hdfx" && parts[2].indexOf("calc_") === 0) {
      if (topic === _calcSubscribedTopic && _calcResolve) {
        try {
          var calcResult = JSON.parse(message.toString());
          console.log("[HDFX-MQTT] 🧮 计算结果:", calcResult.calc_type);
          var resolve = _calcResolve;
          _calcResolve = null;
          _calcReject = null;
          clearTimeout(_calcTimer);
          client.unsubscribe(_calcSubscribedTopic);
          _calcSubscribedTopic = null;
          // Python 返回 {success, data: {fields...}}, 模拟 axios 响应 {data: {fields...}}
          var payload = calcResult.data || calcResult;
          resolve({ data: payload });
        } catch (e) { console.error("[HDFX-MQTT] calc error:", e); }
      }
      return;
    }

    // 方案操作结果: hdfx/{client_key}/plan_*/{b64_params}
    if (parts.length >= 3 && parts[0] === "hdfx" && parts[2].indexOf("plan_") === 0) {
      if (topic === _planTopic && _planResolve) {
        try {
          var planResult = JSON.parse(message.toString());
          console.log("[HDFX-MQTT] 📋 方案结果:", parts[2]);
          var resolve = _planResolve;
          _planResolve = null;
          _planReject = null;
          clearTimeout(_planTimer);
          client.unsubscribe(_planTopic);
          _planTopic = null;
          resolve(planResult);
        } catch (e) { console.error("[HDFX-MQTT] plan error:", e); }
      }
      return;
    }

    // 数据推送: hdfx/{client_key}/{data_type}
    if (parts.length !== 3 || parts[0] !== "hdfx") return;

    // ── 公共赛事信息: hdfx/public/ft_infos 或 bk_infos ──
    // payload 现在是 OSS URL (可能带 ?h=ver), 不再是 inline JSON。
    // 周末赛事爆量时 infos 数组可达数百 KB, 与业务数据同走 OSS, MQTT 只推 URL。
    if (parts[1] === "public" && (parts[2] === "ft_infos" || parts[2] === "bk_infos")) {
      var _infoUrl = message.toString().trim();
      var _isFtInfos = parts[2] === "ft_infos";
      if (!_infoUrl || _infoUrl.charAt(0) === "{") {
        // 兼容旧 inline JSON (回滚/过渡期): 直接当 JSON 用
        try { _applyPublicInfos(JSON.parse(_infoUrl), _isFtInfos); } catch (e) {}
        return;
      }
      // 去掉 ?h= 版本戳做缓存比对, 同版本不重复下载
      var _verKey = _isFtInfos ? "__ft_infos_url" : "__bk_infos_url";
      if (window[_verKey] === _infoUrl) return;
      window[_verKey] = _infoUrl;
      fetch(_infoUrl)
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
        .then(function (infos) { _applyPublicInfos(infos, _isFtInfos); })
        .catch(function (err) {
          window[_verKey] = null; // 下载失败, 允许下次重试
          console.error("[HDFX-MQTT] 公共赛事信息下载失败:", parts[2], err);
        });
      return;
    }


    var ck = parts[1];
    var dt = parts[2];
    var key = ck + "/" + dt;
    var payload = message.toString();

    // ── 服务端告知数据未变化，读本地缓存 ──
    try {
      var parsed = JSON.parse(payload);
      if (parsed && parsed.cache === true) {
        // console.log("[HDFX-MQTT] 💾 数据未变化, 读本地缓存:", key);
        var cached = dataCache[key];
        if (cached) {
          // 有 pending 请求 → 用缓存响应
          var list = pendingRequests[key];
          if (list && list.length) {
            for (var i = 0; i < list.length; i++) {
              clearTimeout(list[i].tid);
              sendViaBlob(list[i].xhr, cached.data);
            }
            delete pendingRequests[key];
          }
          // 触发 Vue 更新
          var xhrRef = activeXhrRef[key];
          if (xhrRef) triggerVueUpdate(key, cached.data);
        }
        return;
      }
    } catch (e) {
      // 不是 JSON → 当作 URL 处理
    }

    var url = payload;
    console.log("[HDFX-MQTT] 📩 收到:", topic);

    // 按 dataType 决定用哪份公共 infos (避免足球篮球互相污染)
    var isFt = dt && dt.indexOf("ft_") === 0;
    var isBk = dt && dt.indexOf("bk_") === 0;

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        // 如果数据里没有 JCInfos/HGInfos, 用「同类型」的公共赛事信息补上 (ft 用 ft, bk 用 bk)
        var pubInfos = null;
        if (isFt && window.__hdfx_ft_infos) pubInfos = window.__hdfx_ft_infos;
        else if (isBk && window.__hdfx_bk_infos) pubInfos = window.__hdfx_bk_infos;
        if (pubInfos) {
          if (!data.JCInfos || data.JCInfos.length === 0) {
            data.JCInfos = pubInfos.JCInfos || [];
          }
          if (!data.HGInfos || data.HGInfos.length === 0) {
            data.HGInfos = pubInfos.HGInfos || [];
          }
        }
        dataCache[key] = { data: data, ts: Date.now() };

        // 用 profitRateMap 更新公共 JCInfos 的 profitRate
        if (data.profitRateMap) {
          var prMap = data.profitRateMap;
          var targetInfos = null;
          if (isFt && window.__hdfx_ft_infos) targetInfos = window.__hdfx_ft_infos;
          else if (isBk && window.__hdfx_bk_infos) targetInfos = window.__hdfx_bk_infos;
          // dbg(", Object.keys(prMap).length, "条, isFt=" + isFt, "targetInfos=" + !!targetInfos);
          if (targetInfos && targetInfos.JCInfos) {
            var jcList = targetInfos.JCInfos;
            var _prUpdated = 0;
            for (var pi = 0; pi < jcList.length; pi++) {
              var mid = jcList[pi].matchId;
              if (mid && prMap[mid]) {
                jcList[pi].profitRate = prMap[mid];
                _prUpdated++;
              }
            }
            // console.log("[HDFX-MQTT] 📊 profitRate 已更新:", _prUpdated, "条");
          }
        }

        // 记录缓存数据基于的金额 (从数据本身读取实际基准)
        var _dtFromKey = key.split("/")[1];
        if (_dtFromKey) {
          _cacheBaseAmt[key] = _detectBaseAmt(data, _dtFromKey);
          _snapshotConfig(_dtFromKey);
        }

        // 1. 首次请求的 pending
        var list = pendingRequests[key];
        if (list && list.length) {
          // 首次数据到达, 更新 profitRateMap 到公共 infos
          if (data.profitRateMap) {
            var _ti3 = isFt ? window.__hdfx_ft_infos : (isBk ? window.__hdfx_bk_infos : null);
            // console.log("[HDFX-MQTT] 📊 首次 profitRateMap:", Object.keys(data.profitRateMap).length, "条, target=" + !!_ti3);
            if (_ti3 && _ti3.JCInfos) {
              for (var _pi3 = 0; _pi3 < _ti3.JCInfos.length; _pi3++) {
                var _m3 = _ti3.JCInfos[_pi3].matchId;
                if (_m3 && data.profitRateMap[_m3]) _ti3.JCInfos[_pi3].profitRate = data.profitRateMap[_m3];
              }
            }
          }
          for (var i = 0; i < list.length; i++) {
            clearTimeout(list[i].tid);
            sendViaBlob(list[i].xhr, data);
          }
          // console.log("[HDFX-MQTT] ⚡ 首次响应:", key, "→", list.length, "个请求");
          delete pendingRequests[key];
          return;
        }

        // 2. Publisher 主动推送的更新
        var xhrRef = activeXhrRef[key];
        if (xhrRef) {
          // 推送更新前, 确保 profitRateMap 已应用到公共 infos
          if (data.profitRateMap) {
            var _ti = isFt ? window.__hdfx_ft_infos : (isBk ? window.__hdfx_bk_infos : null);
            if (_ti && _ti.JCInfos) {
              for (var _pi2 = 0; _pi2 < _ti.JCInfos.length; _pi2++) {
                var _m2 = _ti.JCInfos[_pi2].matchId;
                if (_m2 && data.profitRateMap[_m2]) _ti.JCInfos[_pi2].profitRate = data.profitRateMap[_m2];
              }
            }
          }
          // console.log("[HDFX-MQTT] 📡 推送更新:", key);
          triggerVueUpdate(key, data);
        } else {
          // console.log("[HDFX-MQTT] 📦 数据已缓存:", key);
        }
      })
      .catch(function (err) {
        console.error("[HDFX-MQTT] OSS下载失败:", key, err);
      });
  }

  // ─── 主动推送时触发 Vue 更新 ───
  function triggerVueUpdate(key, data) {
    var app = document.querySelector("#app");
    if (!app || !app.__vue__) return;

    function findComponent(vm) {
      if (typeof vm.fetchData === "function" && vm.JCInfos !== undefined) {
        return vm;
      }
      if (vm.$children) {
        for (var i = 0; i < vm.$children.length; i++) {
          var found = findComponent(vm.$children[i]);
          if (found) return found;
        }
      }
      return null;
    }

    var comp = findComponent(app.__vue__);
    if (!comp) return;

    // console.log("[HDFX-MQTT] 🔄 触发 Vue 组件更新");
    comp.fetchData();
  }

  // ─── 订阅管理 ───
  function ensureSubscribed(key) {
    if (currentSubs[key]) return;

    // 取消旧订阅 (但保留 dataCache 供缓存复用)
    var oldKeys = Object.keys(currentSubs);
    if (oldKeys.length > 0 && client && connected) {
      for (var i = 0; i < oldKeys.length; i++) {
        var oldKey = oldKeys[i];
        client.unsubscribe("hdfx/" + oldKey);
        console.log("[HDFX-MQTT] 🔕 取消订阅:", "hdfx/" + oldKey);
        var oldList = pendingRequests[oldKey];
        if (oldList) {
          for (var j = 0; j < oldList.length; j++) clearTimeout(oldList[j].tid);
          delete pendingRequests[oldKey];
        }
        delete activeXhrRef[oldKey];
      }
    }

    currentSubs = {};
    currentSubs[key] = true;

    if (client && connected) {
      client.subscribe("hdfx/" + key, { qos: 1 });
      console.log("[HDFX-MQTT] 📡 订阅:", "hdfx/" + key);
    }
  }

  // ─── 发布用户配置 (通过订阅传参) ───
  // debounce 300ms: 修改多个返点字段时, change 事件会连续触发多次,
  // 合并成最后一次发送, 避免发 3-N 个内容相似的包打满 broker 速率
  var _publishConfigTimer = null;
  var _publishConfigPending = null;
  // 挂起的 save_config topic 集合: 收到 ACK 后批量 unsubscribe, 避免
  // 连续修改时同时持有多个长 b64 topic 占用 EMQX 单连接订阅配额
  var _pendingSaveTopics = {};  // { topic: tid }
  // save_ack 订阅的释放计时器: 进入 publishConfig 时按需订阅,
  // 收到 ACK 或所有挂起的 save_config 都超时后释放
  var _saveAckTid = null;
  var _SAVE_ACK_TIMEOUT = 3000;

  function _saveAckTopic() { return "hdfx/save_ack/" + clientKey; }

  function _ensureSaveAckSubscribed() {
    if (!client || !connected || !clientKey) return;
    var topic = _saveAckTopic();
    if (!_saveAckTid) {
      client.subscribe(topic, { qos: 1 });
      // console.log("[HDFX-MQTT] 📡 订阅 save_ack:", clientKey);
    }
  }

  function _maybeReleaseSaveAck() {
    // 仅当所有 save_config 订阅都已释放时, 才取消 save_ack 订阅
    for (var k in _pendingSaveTopics) return; // 还有挂起的 save_config
    if (_saveAckTid) {
      clearTimeout(_saveAckTid);
      _saveAckTid = null;
    }
    if (client) {
      try { client.unsubscribe(_saveAckTopic()); } catch (e) {}
    }
  }

  function _releaseSaveTopic(topic) {
    var tid = _pendingSaveTopics[topic];
    if (tid) clearTimeout(tid);
    delete _pendingSaveTopics[topic];
    if (client) {
      try { client.unsubscribe(topic); } catch (e) {}
    }
    _maybeReleaseSaveAck();
  }

  function _releaseAllSaveTopics() {
    Object.keys(_pendingSaveTopics).forEach(_releaseSaveTopic);
    // _releaseSaveTopic 会逐个调用 _maybeReleaseSaveAck, 此处兜底再调一次
    _maybeReleaseSaveAck();
  }

  function publishConfig(config) {
    if (!client || !connected || !clientKey) {
      console.error("[HDFX-MQTT] ❌ 未连接，无法发送配置");
      return;
    }
    _publishConfigPending = config;
    if (_publishConfigTimer) return;
    _publishConfigTimer = setTimeout(function () {
      _publishConfigTimer = null;
      var latest = _publishConfigPending;
      _publishConfigPending = null;
      if (!client || !connected || !clientKey || !latest) return;
      // 先订阅 save_ack, 再发起 save_config; ACK 处理函数会调 _releaseAllSaveTopics
      _ensureSaveAckSubscribed();
      var b64 = _encodeParams(latest);
      var topic = "hdfx/" + clientKey + "/save_config/" + b64;
      // 订阅 = 发起请求，publisher 检测后保存并回复到固定 ACK topic
      client.subscribe(topic, { qos: 1 });
      // console.log("[HDFX-MQTT] 📡 配置订阅(传参):", clientKey);
      // 兜底: ACK 未到也要释放订阅, 防止 broker 配额堆积
      _pendingSaveTopics[topic] = setTimeout(function () {
        console.warn("[HDFX-MQTT] ⏰ save_config ACK 超时, 强制释放:", topic.slice(-20));
        _releaseSaveTopic(topic);
      }, _SAVE_ACK_TIMEOUT);
      // 配置变更后: 如果只改了金额则保留缓存 (由 XHR 拦截层做本地缩放)
      // 如果改了返点则清除缓存 (需要后端重算)
      var _onlyAmtChanged = true;
      var _curCfg = _getCurrentConfig();
      if (_curCfg) {
        var _rebateKeys = [
          "JCPointSin", "JCPointChuan", "JCPointChuanQb",
          "JCPointSinLq", "JCPointChuanLq", "JCPointChuanLqQb",
          "JCPointSinTgg", "JCPointSinHalf", "JCPointSinHad", "JCPointChuanHad",
          "HGPoint"
        ];
        for (var _ri = 0; _ri < _rebateKeys.length; _ri++) {
          var _rk = _rebateKeys[_ri];
          var _oldV = parseFloat((_curCfg[_rk] || 0));
          var _newV = parseFloat((latest[_rk] || _oldV || 0));
          if (Math.abs(_oldV - _newV) > 0.0001) {
            _onlyAmtChanged = false;
            break;
          }
        }
      } else {
        _onlyAmtChanged = false;
      }
      if (!_onlyAmtChanged) {
        dataCache = {};
      }
    }, 300);
  }

  // ─── 金额缩放 (新金额 / 缓存时金额 = 倍数, 所有金额字段乘以倍数) ───

  /**
   * 从 dataCache 中找到匹配前缀的 profitRateMap, 更新到 infos.JCInfos
   */
  function _applyProfitRateMap(infos, prefix) {
    if (!infos || !infos.JCInfos || !dataCache) return;
    for (var k in dataCache) {
      var dt = k.split("/")[1];
      if (dt && dt.indexOf(prefix) === 0 && dataCache[k].data && dataCache[k].data.profitRateMap) {
        var prMap = dataCache[k].data.profitRateMap;
        var jcList = infos.JCInfos;
        for (var i = 0; i < jcList.length; i++) {
          var mid = jcList[i].matchId;
          if (mid && prMap[mid]) {
            jcList[i].profitRate = prMap[mid];
          }
        }
        break; // 只用第一个匹配的
      }
    }
  }

  // 记录每个 key 的缓存数据是基于多少金额计算的
  var _cacheBaseAmt = {};

  // 上次请求的参数快照 (用于判断"只改了金额")
  var _lastParams = {};
  // 暴露到 window 供调试
  window.__hdfx_debug = { _lastParams: _lastParams, _cacheBaseAmt: _cacheBaseAmt, dataCache: dataCache };

  /**
   * 判断是否只改了金额 (返点没变)
   * 从 Vue 组件的 configData 读取当前配置, 与上次缓存时的配置对比
   * @param {string} dt - 数据类型
   * @returns {number|false} - 如果只改了金额返回新金额, 否则返回 false
   */
  function _isAmountOnlyChange(dt) {
    var last = _lastParams[dt];
    if (!last) return false;

    var current = _getCurrentConfig();
    if (!current) return false;

    var newAmt = parseFloat(current.JCTzAmt || 0);
    var lastAmt = parseFloat(last.JCTzAmt || 0);
    if (!newAmt || newAmt === lastAmt) return false;

    // 检查返点字段是否变化
    var rebateFields = [
      "JCPointSin", "JCPointChuan", "JCPointChuanQb",
      "JCPointSinLq", "JCPointChuanLq", "JCPointChuanLqQb",
      "JCPointSinTgg", "JCPointSinHalf", "JCPointSinHad", "JCPointChuanHad",
      "HGPoint"
    ];
    for (var i = 0; i < rebateFields.length; i++) {
      var f = rebateFields[i];
      var a = parseFloat(last[f] || 0);
      var b = parseFloat(current[f] || 0);
      if (Math.abs(a - b) > 0.0001) return false;
    }

    return newAmt;
  }

  /**
   * 获取当前数据类型对应的投注金额
   */
  function _getAmtForType(dt, cfg) {
    if (!cfg) return 10000;
    return parseFloat(cfg.JCTzAmt || 10000);
  }

  /**
   * 从数据到达时的用户配置记录基准金额
   * 始终用 configData.JCTzAmt 作为基准 (所有类型统一)
   */
  function _detectBaseAmt(data, dt) {
    // 后端广播统一用 10000 计算, 前端按用户金额缩放
    return 10000;
  }
  function _getCurrentConfig() {
    var app = document.querySelector("#app");
    if (!app || !app.__vue__) return null;
    var queue = [app.__vue__];
    while (queue.length > 0) {
      var vm = queue.shift();
      if (vm.configData && vm.configData.JCPointSin !== undefined) {
        return vm.configData;
      }
      if (vm.$children) {
        for (var i = 0; i < vm.$children.length; i++) {
          queue.push(vm.$children[i]);
        }
      }
    }
    return null;
  }

  /**
   * 保存当前配置快照 (供下次对比)
   */
  function _snapshotConfig(dt) {
    var cfg = _getCurrentConfig();
    if (cfg) {
      _lastParams[dt] = JSON.parse(JSON.stringify(cfg));
    }
  }

  /**
   * 对数据进行金额缩放
   * @param {object} data - 缓存数据
   * @param {string} dt - 数据类型
   * @param {number} newAmt - 新金额
   * @param {number} baseAmt - 缓存数据基于的金额
   * @returns {object} - 缩放后的数据 (深拷贝)
   */
  function scaleAmounts(data, dt, newAmt, baseAmt) {
    var scale = newAmt / baseAmt;
    if (Math.abs(scale - 1) < 0.0001) return data;

    var result = JSON.parse(JSON.stringify(data)); // 深拷贝

    if (dt === "ft_dan" || dt === "bk_dan" || dt === "ft_chuan" || dt === "bk_chuan") {
      _scaleSinData(result.sinData, scale);
      _scaleChuanData(result.chuanData, scale);
    } else if (dt === "ft_qb" || dt === "bk_qb") {
      _scaleQBData(result.QBData, scale);
    } else if (dt === "ft_goal") {
      _scaleGoalData(result.goalData, scale);
    } else if (dt === "ft_bqc") {
      _scaleBqcData(result.bqcData, scale);
    }

    return result;
  }

  function _scaleSinData(list, scale) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      var d = list[i].data;
      if (!d) continue;
      d.jcBet1 = _scaleVal(d.jcBet1, scale);
      d.jcBet2 = _scaleVal(d.jcBet2, scale);
      d.hgBet1 = _scaleVal(d.hgBet1, scale);
      d.hgBet2 = _scaleVal(d.hgBet2, scale);
      d.JCPoint1 = _scaleVal(d.JCPoint1, scale);
      d.JCPoint2 = _scaleVal(d.JCPoint2, scale);
      d.HGPoint1 = _scaleVal(d.HGPoint1, scale);
      d.HGPoint2 = _scaleVal(d.HGPoint2, scale);
      d.jcAmount1 = _scaleVal(d.jcAmount1, scale);
      d.jcAmount2 = _scaleVal(d.jcAmount2, scale);
      d.hgAmount1 = _scaleVal(d.hgAmount1, scale);
      d.hgAmount2 = _scaleVal(d.hgAmount2, scale);
      d.profit = _scaleVal(d.profit, scale);
      // profitRate / ret 不缩放 (百分比不变)
    }
  }

  function _scaleChuanData(list, scale) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      item.JCTzAmt = _scaleVal(item.JCTzAmt, scale);
      item.HGTzAmt1_1 = _scaleVal(item.HGTzAmt1_1, scale);
      item.HGTzAmt1_2 = _scaleVal(item.HGTzAmt1_2, scale);
      item.HGTzAmt2_1 = _scaleVal(item.HGTzAmt2_1, scale);
      item.HGTzAmt2_2 = _scaleVal(item.HGTzAmt2_2, scale);
      item.JCAmount = _scaleVal(item.JCAmount, scale);
      item.HGAmount1_1 = _scaleVal(item.HGAmount1_1, scale);
      item.HGAmount1_2 = _scaleVal(item.HGAmount1_2, scale);
      item.HGAmount2_1 = _scaleVal(item.HGAmount2_1, scale);
      item.HGAmount2_2 = _scaleVal(item.HGAmount2_2, scale);
      item.JcProfit = _scaleVal(item.JcProfit, scale);
      item.HgProfit1 = _scaleVal(item.HgProfit1, scale);
      item.HgProfit2 = _scaleVal(item.HgProfit2, scale);
      // JcProfitRate 不缩放
    }
  }

  function _scaleQBData(list, scale) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      item.JCTzAmt1 = _scaleVal(item.JCTzAmt1, scale);
      item.JCTzAmt2 = _scaleVal(item.JCTzAmt2, scale);
      item.HGTzAmt1 = _scaleVal(item.HGTzAmt1, scale);
      item.HGTzAmt2 = _scaleVal(item.HGTzAmt2, scale);
      item.HGTzAmt1_1 = _scaleVal(item.HGTzAmt1_1, scale);
      item.HGTzAmt1_2 = _scaleVal(item.HGTzAmt1_2, scale);
      item.HGTzAmt2_1 = _scaleVal(item.HGTzAmt2_1, scale);
      item.HGTzAmt2_2 = _scaleVal(item.HGTzAmt2_2, scale);
      item.JCAmount1 = _scaleVal(item.JCAmount1, scale);
      item.JCAmount2 = _scaleVal(item.JCAmount2, scale);
      item.HGAmount1 = _scaleVal(item.HGAmount1, scale);
      item.HGAmount2 = _scaleVal(item.HGAmount2, scale);
      item.HGAmount1_1 = _scaleVal(item.HGAmount1_1, scale);
      item.HGAmount1_2 = _scaleVal(item.HGAmount1_2, scale);
      item.HGAmount2_1 = _scaleVal(item.HGAmount2_1, scale);
      item.HGAmount2_2 = _scaleVal(item.HGAmount2_2, scale);
      item.profit = _scaleVal(item.profit, scale);
      // profitRate 不缩放
    }
  }

  function _scaleGoalData(list, scale) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      var d = list[i].data;
      if (!d) continue;
      d.jcBet1 = _scaleVal(d.jcBet1, scale);
      d.hgBet1 = _scaleVal(d.hgBet1, scale);
      d.JCPoint1 = _scaleVal(d.JCPoint1, scale);
      d.HGPoint1 = _scaleVal(d.HGPoint1, scale);
      d.jcAmount1 = _scaleVal(d.jcAmount1, scale);
      d.hgAmount1 = _scaleVal(d.hgAmount1, scale);
      d.profit = _scaleVal(d.profit, scale);
    }
  }

  function _scaleBqcData(list, scale) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      // 投注金额
      item.bqcTzAmt = _scaleVal(item.bqcTzAmt, scale);
      item.hgBet1 = _scaleVal(item.hgBet1, scale);
      item.hgBet2 = _scaleVal(item.hgBet2, scale);
      // JC 各方向投注额
      item.jcBet_hh = _scaleVal(item.jcBet_hh, scale);
      item.jcBet_hd = _scaleVal(item.jcBet_hd, scale);
      item.jcBet_ha = _scaleVal(item.jcBet_ha, scale);
      item.jcBet_dh = _scaleVal(item.jcBet_dh, scale);
      item.jcBet_dd = _scaleVal(item.jcBet_dd, scale);
      item.jcBet_da = _scaleVal(item.jcBet_da, scale);
      item.jcBet_ah = _scaleVal(item.jcBet_ah, scale);
      item.jcBet_ad = _scaleVal(item.jcBet_ad, scale);
      item.jcBet_aa = _scaleVal(item.jcBet_aa, scale);
      // 利润
      item.profit = _scaleVal(item.profit, scale);
      // profitRate 不缩放
    }
  }

  /**
   * 缩放单个值 (支持字符串数字和纯数字)
   */
  function _scaleVal(v, scale) {
    if (v === null || v === undefined || v === 0 || v === "0") return v;
    var n = parseFloat(v);
    if (isNaN(n) || n === 0) return v;
    var scaled = n * scale;
    // 保持原始格式: 如果原来是字符串就返回字符串
    if (typeof v === "string") return scaled.toFixed(4);
    return Math.round(scaled * 10000) / 10000;
  }

  // ─── Blob URL 发送 ───
  function sendViaBlob(xhr, data) {
    var json = JSON.stringify(data);
    var blob = new Blob([json], { type: "application/json" });
    var blobUrl = URL.createObjectURL(blob);
    _origOpen.call(xhr, "GET", blobUrl, true);
    _origSend.call(xhr, null);
    setTimeout(function () { URL.revokeObjectURL(blobUrl); }, 5000);
  }

  // ─── 解析 API → topic key ───
  function resolveKey(apiPath) {
    var dt = API_TYPE_MAP[apiPath];
    if (!dt || !clientKey) return null;
    // 新格式: {client_key}/{data_type}
    return clientKey + "/" + dt;
  }

  // ─── XHR 拦截 ───
  var _origOpen = XMLHttpRequest.prototype.open;
  var _origSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url) {
    this._hdfx_method = method;
    this._hdfx_url = url;
    return _origOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function (body) {
    var xhr = this;
    var method = (xhr._hdfx_method || "").toUpperCase();
    var url = xhr._hdfx_url || "";

    // 未登录 → 走原始 HTTP
    if (!clientKey) return _origSend.apply(this, arguments);

    // ── 拦截 userConfig 写入请求 → 通过 MQTT 发送配置 ──
    // create (POST) / update (PUT) 都要拦截; 否则 PUT 直接走 mock 不落库,
    // 后端 user_configs 一直是默认返点 → 全包桶 key 永远是 jcChuanQb7_hg2.
    var _isUserCfgCreate = (method === "POST" && url.indexOf("/userConfig/create") > -1);
    var _isUserCfgUpdate = (method === "PUT"  && url.indexOf("/userConfig/update")  > -1);
    if (_isUserCfgCreate || _isUserCfgUpdate) {
      try {
        var configData = JSON.parse(body);
        publishConfig(configData);
      } catch (e) {}
      // 模拟成功响应 (后端通过 MQTT 异步落库, ACK 由 hdfx/save_ack/{client_key} 单独处理)
      var fakeResp = JSON.stringify({ success: true });
      var fakeBlob = new Blob([fakeResp], { type: "application/json" });
      var fakeBlobUrl = URL.createObjectURL(fakeBlob);
      _origOpen.call(xhr, "GET", fakeBlobUrl, true);
      _origSend.call(xhr, null);
      setTimeout(function () { URL.revokeObjectURL(fakeBlobUrl); }, 3000);
      return;
    }

    if (method !== "POST") return _origSend.apply(this, arguments);

    var matchedPath = null;
    for (var p in API_TYPE_MAP) {
      if (url.indexOf(p) > -1) { matchedPath = p; break; }
    }
    if (!matchedPath) return _origSend.apply(this, arguments);

    var params = {};
    try { params = JSON.parse(body); } catch (e) {}
    var key = resolveKey(matchedPath);
    if (!key) return _origSend.apply(this, arguments);

    var dt = API_TYPE_MAP[matchedPath];
    var self = this;
    var bodyRef = body;

    activeXhrRef[key] = self;

    // ★ 只改了金额 → 从缓存缩放后直接返回 (不走后端)
    var cached = dataCache[key];
    if (cached && dt) {
      // 即使有缓存也要确保订阅了正确的 topic (切换页面时通知后端)
      if (connectPromise) {
        connectPromise.then(function () {
          if (connected) ensureSubscribed(key);
        });
      }

      // 每次从缓存返回数据时, 确保 profitRateMap 已更新到公共 infos
      if (cached.data && cached.data.profitRateMap) {
        var _isFt = dt.indexOf("ft_") === 0;
        var _isBk = dt.indexOf("bk_") === 0;
        var _tgt = _isFt ? window.__hdfx_ft_infos : (_isBk ? window.__hdfx_bk_infos : null);
        if (_tgt && _tgt.JCInfos) {
          var _pm = cached.data.profitRateMap;
          for (var _pi4 = 0; _pi4 < _tgt.JCInfos.length; _pi4++) {
            var _m4 = _tgt.JCInfos[_pi4].matchId;
            if (_m4 && _pm[_m4]) _tgt.JCInfos[_pi4].profitRate = _pm[_m4];
          }
        }
      }

      var curCfg = _getCurrentConfig();
      var curAmt = _getAmtForType(dt, curCfg);
      var baseAmt = _cacheBaseAmt[key] || curAmt;
      var scale = curAmt / baseAmt;

      if (Math.abs(scale - 1) > 0.0001) {
        // 金额变了, 缩放
        // console.log("[HDFX-MQTT] 💰 金额缩放:", dt, baseAmt + "→" + curAmt, "x" + scale.toFixed(2));
        var scaled = scaleAmounts(cached.data, dt, curAmt, baseAmt);
        sendViaBlob(self, scaled);
      } else {
        // 金额没变, 直接返回缓存
        // console.log("[HDFX-MQTT] ⚡ 缓存命中:", key, "(" + Math.round((Date.now() - cached.ts)/1000) + "s前)");
        sendViaBlob(self, cached.data);
      }
      if (dt) _snapshotConfig(dt);
      return;
    }

    // 首次请求
    // console.log("[HDFX-MQTT] 🔍 首次请求:", matchedPath, "→", key);

    connectPromise.then(function () {
      if (!connected) {
        console.log("[HDFX-MQTT] 连接失败, 回退HTTP:", key);
        _origSend.call(self, bodyRef);
        return;
      }

      ensureSubscribed(key);
      // 纯订阅模式: 订阅后 publisher 自动检测并推送，无需 publish

      if (!pendingRequests[key]) pendingRequests[key] = [];

      var entry = {
        xhr: self,
        tid: setTimeout(function () {
          console.warn("[HDFX-MQTT] ⏰ 超时, 回退HTTP:", key);
          var list = pendingRequests[key];
          if (list) {
            for (var i = list.length - 1; i >= 0; i--) {
              if (list[i] === entry) { list.splice(i, 1); break; }
            }
            if (!list.length) delete pendingRequests[key];
          }
          _origSend.call(self, bodyRef);
        }, FALLBACK_TIMEOUT)
      };

      pendingRequests[key].push(entry);
    });
  };

  // ─── 弹框通知 ───
  function _showNotification(type, title, msg) {
    // 优先使用 ElementUI (Vue 项目内)
    var app = document.querySelector("#app");
    if (app && app.__vue__ && app.__vue__.$message) {
      app.__vue__.$message({
        message: title + " " + msg,
        type: type === "success" ? "success" : "error",
        duration: type === "success" ? 3000 : 0,
        showClose: true,
      });
      return;
    }

    // 回退: 原生弹框
    var div = document.createElement("div");
    div.style.cssText = "position:fixed;top:20px;right:20px;z-index:99999;padding:16px 24px;" +
      "border-radius:8px;font:14px/1.5 sans-serif;max-width:360px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" +
      "animation:hdfxFadeIn .3s ease;" +
      (type === "success"
        ? "background:#166534;color:#bbf7d0;border:1px solid #22c55e;"
        : "background:#991b1b;color:#fecaca;border:1px solid #ef4444;");
    div.innerHTML = "<b>" + title + "</b><br>" + msg.replace(/\n/g, "<br>");
    document.body.appendChild(div);

    // 添加动画样式
    if (!document.getElementById("hdfx-notify-style")) {
      var style = document.createElement("style");
      style.id = "hdfx-notify-style";
      style.textContent = "@keyframes hdfxFadeIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}";
      document.head.appendChild(style);
    }

    var duration = type === "success" ? 4000 : 8000;
    setTimeout(function () {
      div.style.opacity = "0";
      div.style.transition = "opacity .3s";
      setTimeout(function () { div.remove(); }, 300);
    }, duration);
  }

  // ─── 暴露全局 API ───
  window.__hdfx_mqtt = {
    login: login,
    publishConfig: publishConfig,
    isConnected: function () { return connected; },
    getClientKey: function () { return clientKey; },
    getSubs: function () { return currentSubs; },
    getPending: function () {
      var r = {};
      for (var k in pendingRequests) r[k] = pendingRequests[k].length;
      return r;
    },
    getCache: function () {
      var result = {};
      for (var k in dataCache) {
        // key format: "clientKey/dataType" → extract dataType
        var dt = k.indexOf("/") > -1 ? k.split("/")[1] : k;
        result[dt] = dataCache[k] && dataCache[k].data ? dataCache[k].data : dataCache[k];
      }
      return result;
    },
    calcRequest: calcRequest,
    planRequest: planRequest,
    getUserInfo: function () {
      if (_userInfo) return _userInfo;
      try {
        var s = localStorage.getItem("hdfx_userinfo");
        if (s) return JSON.parse(s);
      } catch(e) {}
      return null;
    },
    disconnect: function () {
      if (client) {
        client.end();
        client = null;
        connected = false;
        connectPromise = null;
        currentSubs = {};
        dataCache = {};
        _releaseAllSaveTopics();
        // 清除保存的凭证
        try { localStorage.removeItem("hdfx_account"); localStorage.removeItem("hdfx_password"); } catch(e) {}
        console.log("[HDFX-MQTT] 👋 已登出并断开连接");
      }
    }
  };

  // ─── 页面加载时自动重连 ───
  (function autoReconnect() {
    try {
      var savedAccount = localStorage.getItem("hdfx_account");
      var savedPassword = localStorage.getItem("hdfx_password");
      if (savedAccount && savedPassword && !client) {
        console.log("[HDFX-MQTT] 🔄 检测到已保存凭证，自动重连:", savedAccount);
        // 设置状态但不走 login() 的 Promise 流程
        clientKey = savedAccount;
        clientPass = savedPassword;
        CLIENT_ID = savedAccount + "__" + savedPassword + "__" + Math.random().toString(36).substr(2, 6);
        connect();
      }
    } catch(e) {}
  })();

  console.log("[HDFX-MQTT] 🚀 纯推送模式已启用");
})();
