"use strict";

/*
统一调用方法，提供给页面调用广告为使用
*/
var commonV1Fun = {
  comIsVerify: 1,
  //开奖数据是否审核，0：不审核，1：是已审核
  comTerm: 20099,
  //七星彩暂定期号
  comDataChannel: 'c',
  //计算器数据渠道：c-现金，i-网络，v-电话，a-全渠道
  comClientCode: '3001',
  //前端编码（1001:app; 2001:小程序; 3001:两网）
  /**
   * idName，页面加载位置，字符串多个以逗号隔开；
   * url，调用地址，字符串多个以逗号隔开；
   * domFun加载页面后需要调用的方法，字符串多个以逗号隔开
   * 调用方法 commonV1Fun.loadHtml(idArray,adArray,funArray)
  */
  loadHtml: function loadHtml(idArray, adArray, funArray) {
    if (idArray == '' && adArray == '') {
      return;
    }

    var idList = idArray.split(',');
    var adList = adArray.split(',');
    var funList = new Array();
    var url = "/htmlfrag/";

    if (funArray) {
      funList = funArray.split(',');
    }

    var idLen = idList.length;
    var temAd = '',
      temUrl = '';

    for (var i = 0; i < idLen; i++) {
      temAd = adList[i].split('_');

      if (temAd.length > 1) {
        temUrl = '//' + jsCommonDataV1[temAd[1]] + url + temAd[0] + '.html';
      } else {
        temUrl = url + adList[i] + '.html';
      }

      commonV1Fun.operation(idList[i], temUrl, funList[i]);
    }
  },
  operation: function operation(idname, url, domFun) {
    //idName，页面加载位置；url，调用地址；
    //domFun加载页面后需要调用的方法
    if (typeof jQuery == 'undefined') {
      //    alert('没有加载');
      return;
    }

    $("#" + idname).load(url, function () {
      if (domFun != undefined && domFun != '') {
        eval(domFun);
      }
    });
  },

  /**
   * ajax调用
   *
   */
  ajaxFun: function ajaxFun(func, url, errData, typeN, PostData) {
    if (PostData == undefined) {
      PostData = {};
    }

    if (errData == undefined) {
      errData = {};
    }

    $.ajax({
      crossDomain: true,
      timeout: 30000,
      //xhrFields: {withCredentials: true},
      async: true,
      url: url,
      type: typeN,
      data: PostData,
      dataType: "json",
      success: function success(data) {
        func(data);
      },
      error: function error(data) {
        func(errData);
      },
      complete: function complete(XHR, TextStatus) {
        //超时执行
        if (TextStatus == 'timeout') {
          func(errData);
        }
      }
    });
  },
  jsonLength: function jsonLength(json) {
    var n = 0;

    for (var i in json) {
      n++;
    }

    return n;
  },
  round: function round(data, m) {
    var dt = data.toFixed(8).toString();
    var pos = 0
    if (dt.indexOf('万') > 0) return data; //如果数据中在万以上，就不处理

    if (dt.indexOf('.') < 0) {
      //如果没有小数点呢？
      pos = dt.length;
    } else {
      pos = dt.indexOf('.') + 3;
    }

    var key = dt.charAt(pos);
    var vals = '';

    if (key < 5) {
      vals = dt.substr(0, pos);
    } else if (key > 5) {
      vals = parseFloat(dt.substr(0, pos)) + 0.01;
    } else {
      if (dt.charAt(pos - 1) % 2) {
        vals = parseFloat(dt.substr(0, pos)) + 0.01;
      } else {
        vals = parseFloat(dt.substr(0, pos));
      }
    } //vals已经是2位小数，使用toFixed(2)使之补零操作


    return (parseFloat(vals) * m).toFixed(2);
  },
  setPrefix: function setPrefix(str, len, pre) {
    len = len || 2;
    pre = pre || '0';
    return Array(len + 1).join(pre).split('').concat(String(str).split('')).slice(-len).join('');
  },
  getSubString: function getSubString(domID, str, len) {
    //domID,修改ID的内容,值为notID，直接返回字符串
    //str 字符串，
    //len 返回字符长度
    var returnStr = '';
    var strNum = 0;

    if (str.length <= len) {
      returnStr = str;
    } else {
      for (var i = 0; i < str.length; i++) {
        strNum++;
        var reg = /[\u4e00-\u9fa5]/;

        if (reg.test(str[i])) {
          strNum++;
        }
        if (strNum < len) {
          returnStr = returnStr + str[i];
        } else {
          returnStr = returnStr + "...";
          break;
        }
      }
    }

    if (domID == 'notID') {
      return returnStr;
    } else {
      $('#' + domID).html(returnStr);
    }
  },
  getTimeFormat: function getTimeFormat(time, flag) {
    var dd = time.replace(new RegExp(/-/gm), "/"); //将所有的'-'转为'/'即可
    var date = new Date(dd);
    if(date == "Invalid Date") return '';
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mm = date.getMinutes();
    var s = date.getSeconds();
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;
    h = h < 10 ? "0" + h : h;
    mm = mm < 10 ? "0" + mm : mm;
    s = s < 10 ? "0" + s : s;

    if (flag == 0) {
      return y + "-" + m + "-" + d;
    } else if (flag == 1) {
      return y + "-" + m + "-" + d + " " + h + ":" + mm;
    }
  },
  getWeekName: function getWeekName(d) {
    if (!d) {
      return '';
    }

    if (isNaN(d) && d.indexOf("-") != -1) {
      d = d.replace(/-/g, '/');
    }

    d = new Date(d);
    var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return weekDay[d.getDay()];
  },

  /**
   * 千位分割符
   * 123456返回123,456
   */
  numFormat: function numFormat(num) {
    var res = num.toString().replace(/\d+/, function (n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    });
    return res;
  },
  numberFormat: function numberFormat(value) {
    value = value.replace(/,/g, "");
    var param = {};
    var k = 10000,
      sizes = ['', '万元', '亿元', '万亿'],
      i;

    if (value < k) {
      param.value = value;
      param.unit = '元';
    } else {
      i = Math.floor(Math.log(value) / Math.log(k));
      param.value = Math.floor(value / Math.pow(k, i) * 100) / 100;
      param.unit = sizes[i];
    }
    var money =  param.value;
    var x = money.toString().split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var  rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    param.value = x1 + x2;
    return param;
  },
  thousandBitSeparator: function thousandBitSeparator(num) {
    return (
      num &&
      (num.toString().indexOf('.') != -1
        ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
            return $2 + ',';
          })
        : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, function ($1, $2) {
            return $2 + ',';
          }))
    );
  },
  /**
   * 2021年数字转换
   */
  numberFormat2021: function numberFormat2021(value) {
    value = value.replace(/,/g, "");
    var param = {};
    if (value >= 100000000) {
      var temD = Math.floor(value/1000000).toString();
      param.value= commonV1Fun.thousandBitSeparator(temD.substring(0,temD.length-2)) + '.' + temD.substr(temD.length-2);
      param.unit = '亿元';
    } else if(value >=100000) {
      param.value = commonV1Fun.thousandBitSeparator(Math.floor(value / 10000));
      param.unit = '万元';
    }else{
      param.value=commonV1Fun.thousandBitSeparator(Math.floor(value));
      param.unit = '元';
    }
    return param;
  },
  rectangleSlideShow: function rectangleSlideShow(cls, time) {
    /* 幻灯片1 */
    new Swiper(cls, {
      direction: 'horizontal',
      // 垂直切换选项
      loop: true,
      // 循环模式选项
      //自动播放
      autoplay: {
        delay: time,
        disableOnInteraction: false
      }
    });
  },
  squareSlideShow: function squareSlideShow(cls, time) {
    /* 幻灯片1 */
    new Swiper(cls, {
      //direction: 'horizontal', // 垂直切换选项
      loop: true,
      // 循环模式选项
      //自动播放
      autoplay: {
        delay: time,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<span class=" ' + className + ' ">' + (index + 1) + '</span>';
        }
      }
    });
  },
  toJqkjPdf: function toJqkjPdf(gameType, url) {
    var lotteryGameConfig = {
      dlt: {
        gameId: 33800
      },
      pls: {
        gameId: 28200
      },
      plw: {
        gameId: 28300
      },
      qxc: {
        gameId: 17100
      }
    };
    // var jqkjPdfUrl = '//pdf.sporttery.cn/' + lotteryGameConfig[gameType].gameId + '/' + gameNum + '/' + gameNum + '.pdf';
    var jqkjPdfUrl = url
    if(jqkjPdfUrl.indexOf(".pdf") >=0){
      window.open(jqkjPdfUrl);
    }
  },
  //帮助中心，后退按钮    
  tcwBack: function tcwBack(backUrl) {
    if (document.referrer == "") {
      document.location.href = backUrl;
    } else {
      if (document.referrer.indexOf('lottery.gov.cn/bzzx/') === -1) {
        document.location.href = backUrl;
      } else {
        if (document.referrer.indexOf('/index_') === -1) {
          document.location.href = backUrl; //返回第一页
        } else {
          history.back(-1); //从其他分页过来的，返回当前分页
        }
        return backUrl;
      }
    }
  },

    /**
     * 设置cookie
     * @param {String} cname 键名
     * @param {String} cvalue 键值
     * @param {Int} exdays 过期时间（天）
     */
    setCookie: function setCookie(cname, cvalue, exdays) {
      var exTime = arguments[2] ? arguments[2] : 10;
      var d = new Date();
      d.setTime(d.getTime() + exTime * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    /**
     * 获取cookie
     * @param {String} cname 键名
     */
    getCookie: function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    },

    /**
     * 二级栏目顶部
     * @param {object} objData 顶部信息
     */
    load2rdTop: function load2rdTop(objData) {
      try {
        if (objData != undefined && Object.keys(objData).length > 0) {
          $("#commonBack").html('');
          $("#commonTopTitle").html('');

          if (objData.title != undefined) {
            if (objData.backUrl == undefined) {
              objData.backUrl = '';
            }

            var backEvent = commonV1Fun.topGoBack(objData.backUrl);
            $("#commonBack").attr("onclick", backEvent);
            $("#commonTopTitle").html(objData.title);
          }
        }
      } catch (e) { }
    },
    topGoBack: function topGoBack(url) {
      var backUrl = '';

      if (url == '') {
        backUrl = 'javascript:window.history.go(-1); return false;';
      } else {
        backUrl = 'window.location.href = ' + url;
      }

      return backUrl;
    },

    /**
     * 二级栏目导航
     * @param {object} objData 导航信息
     */
    load2rdNav: function load2rdNav() {
      var objData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var actIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      try {
        if (actIdx == undefined) {
          actIdx = 0;
        }

        if (objData != undefined && objData.length > 0) {
          $("#commonNav").html('');
          var menuStr = '';
          objData.forEach(function (item, index) {
            var activeClas = '';

            if (index == actIdx) {
              activeClas = 'class="active"';
            }

            menuStr += '<li><a ' + activeClas + ' href="' + item.url + '">' + item.title + '</a></li>';
          });
          $("#commonNav").html(menuStr);
        }
      } catch (e) { }
    },
    pdfjs: 'https://pdf.sporttery.cn/js/web/viewer.html',
      mToJqkjPdf: function mToJqkjPdf(path) {
        var system = commonV1Fun.checkSystem();
        var url = '';

        if (path !== '' && path !== undefined) {
          url = path;

          if (path.indexOf("//pdf.sporttery.cn") >= 0 && path.indexOf(".pdf")) {
            if (system === "Android") {
              url = commonV1Fun.pdfjs + '?file=' + path;
            }

            window.location.href = url;
          }
        }
      },
    checkSystem: function checkSystem() {
      var n = navigator.userAgent;
      var system = 'Other';

      if (n.indexOf('Android') > -1 || n.indexOf('Linux') > -1) {
        system = 'Android';
      } else if (n.indexOf('iPhone') > -1) {
        system = 'iPhone';
      }

      return system;
    },
    getPara:function(p){
      var reg = new RegExp("(^|&)"+p+"=([^&]*)(&|$)");
      var res = window.location.search.substr(1).match(reg);
      if(res){
          return commonV1Fun.stripscript(unescape(res[2]));
      }else{
          return '';
      }
    },
    stripscript:function(s) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    }

  };