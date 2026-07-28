var isBKCup = false;
var curGameIndex; //游戏序号0：足球游戏；else：篮球游戏
var gameData = [[], []];
var data = []; //列表数据
var gameName = ['足球', '篮球'];
var portletHtm = "<div class='portlet ui-widget'><div class='portlet-header ui-widget-header ui-corner-all'>";
var curMatchIndex = -1;
var scrollTarget = 0;
var poolNameAry = [
  [
    { nameStr: '胜平负', nameCode: 'had' },
    { nameStr: '让球胜平负', nameCode: 'hhad' },
    {
      nameStr: '比分',
      nameCode: 'crs',
    },
    { nameStr: '总进球', nameCode: 'ttg' },
    { nameStr: '半全场', nameCode: 'hafu' },
  ],
  [
    {
      nameStr: '胜负',
      nameCode: 'mnl',
    },
    { nameStr: '让分胜负', nameCode: 'hdc' },
    { nameStr: '大小分', nameCode: 'hilo' },
    { nameStr: '胜分差', nameCode: 'wnm' },
  ],
];
var oddsHeaderName = [
  [
    ['胜', '平', '负'],
    ['让胜', '让平', '让负'],
    [
      '1:0',
      '2:0',
      '2:1',
      '3:0',
      '3:1',
      '3:2',
      '4:0',
      '4:1',
      '4:2',
      '5:0',
      '5:1',
      '5:2',
      '胜其它',
      '0:0',
      '1:1',
      '2:2',
      '3:3',
      '平其它',
      '0:1',
      '0:2',
      '1:2',
      '0:3',
      '1:3',
      '2:3',
      '0:4',
      '1:4',
      '2:4',
      '0:5',
      '1:5',
      '2:5',
      '负其它',
    ],
    ['0', '1', '2', '3', '4', '5', '6', '7+'],
    ['胜胜', '胜平', '胜负', '平胜', '平平', '平负', '负胜', '负平', '负负'],
  ],
  [
    ['主负', '主胜'],
    ['让分主负', '让分主胜'],
    ['大', '小'],
    ['', '1-5', '6-10', '11-15', '16-20', '21-25', '26+', '', '1-5', '6-10', '11-15', '16-20', '21-25', '26+'],
  ],
];
var listHeadSize = [0, 0];
var selectedAry = [];
// var listHeadTop;
var optionAry = [
  [],
  [],
  [['2x1', '2']],
  [
    ['3x1', '3'],
    ['3x3', '2'],
    ['3x4', '23'],
  ],
  [
    ['4x1', '4'],
    ['4x4', '3'],
    ['4x5', '34'],
    ['4x6', '2'],
    ['4x11', '234'],
  ],
  [
    ['5x1', '5'],
    ['5x5', '4'],
    ['5x6', '45'],
    ['5x10', '2'],
    ['5x16', '345'],
    ['5x20', '23'],
    ['5x26', '2345'],
  ],
  [
    ['6x1', '6'],
    ['6x6', '5'],
    ['6x7', '56'],
    ['6x15', '2'],
    ['6x20', '3'],
    ['6x22', '456'],
    ['6x35', '23'],
    ['6x42', '3456'],
    ['6x50', '234'],
    ['6x57', '23456'],
  ],
  [
    ['7x1', '7'],
    ['7x7', '6'],
    ['7x8', '67'],
    ['7x21', '5'],
    ['7x35', '4'],
    ['7x120', '234567'],
  ],
  [
    ['8x1', '8'],
    ['8x8', '7'],
    ['8x9', '87'],
    ['8x28', '6'],
    ['8x56', '5'],
    ['8x70', '4'],
    ['8x247', '2345678'],
  ],
];
var optionSelectArr = ['2关', '3关', '4关', '5关', '6关', '7关', '8关'];
var times = 50;
var poolIsInit = { ttg: 0, crs: 0, hafu: 0, wnm: 0 };
var mnIndex = 0;
var timeoutID;
var intervalID;
var scrollInterval;
var detailHtml;
var lotFunc = new Object();
var parlay = 1; //过关方式
var switchFlag = 0;
var mixedIndex = '2';
var aLiner = []; //设胆比赛
var aId = [];
var palaryFlag = false;
//var dateArr = [];
var dateAry = [];
var matchIdsAry = [];
var slider = '';
var fLimitLen = 8; //自由过关最大场次限制
var isExceed = false;
var isMuchMatches = false;
var isMuchOdds = false;
var clearIntval = 0;
var large_times = 50;
var init_money = 6000;
var noMatchShow = '<div class="tip-img"><img src="//static.sporttery.cn/res_1_0/tcwm/images/bg_tip.png"><p>当前暂无相关比赛，敬请期待。</p></div>';
var copyJc = null;
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
$(document).ready(function () {
  lotFunc.getJsqConfigData();
  $('#consume').text('0');
  $('#bonus').text('0.00');
  curGameIndex = Number(requestURLPara());
  copyJc = getUrlParam('copy');
  console.log('copyjc', copyJc);
  //初始化更多游戏悬浮框
  //$("#poolSelPan").offset({top: 0, left: 0});
  //tab页选项
  if (curGameIndex != 0 && curGameIndex != 1) {
    curGameIndex = 0;
  }
  if (curGameIndex == 0) {
    //large_times = 50;
    $('#page').removeClass('page2');
    $('#page').addClass('page1');
    var str = `<a  style="width:23%"><div class="had_div">胜平负</div><div class="hhad_div">让球胜平负</div></a>
    <a  style="width:16%">比 分</a> 
    <a >总进球数</a>
    <a >半全场</a>
    <a class="selTab" style="margin-right: 0; float:right;">混合过关</a> `;
    $('#calculator_menu').html(str);
  } else {
    //large_times = 50;
    $('#page').removeClass('page1');
    $('#page').addClass('page2');
    var str = `<a >胜&nbsp;负</a>
     <a style="width:20%">让分胜负</a> 
     <a >胜分差</a> 
     <a >大小分</a>
     <a class="selTab" style="margin-right: 0; float:right;">混合过关</a> `;
    $('#calculator_menu').html(str);
    document.title = '篮球计算器-竞彩网';
    if (isBKCup === true) {
      var str = '<img src="//static.sporttery.cn/pres/proj/2019/201907_BasCupCal/images/cup.jpg" width="100%" onclick="clickbkCup();">';
      $('#bk_cup').css('display', 'block');
      $('#bk_cup').html(str);
    }
  }

  //表头信息
  if (curGameIndex == 0) {
    $('#bkPan').hide();
    //规则信息
    $('#fbTips').show();
    $('#bsbTips').hide();
  } else {
    $('#fbPan').hide();
    //规则信息
    $('#fbTips').hide();
    $('#bsbTips').show();
  }

  /*加载数据*/
  loadData(curGameIndex);
  //可拖动调位置
  $('div.oddsList').sortable({
    axis: 'y',
    handle: '.portlet-header .move',
    stop: function (event, ui) {
      ui.item.children('.portlet-header').triggerHandler('focusout');
    },
  });
  //展开关闭
  $(document).on('click', 'div.portlet-header label.toggle', function () {
    if (curGameIndex == 1) {
      //加载
      $(this).closest('.portlet').find('div.portlet-content').toggle();

      var id = 'b_' + $(this).closest('table').attr('id').split('_')[1] + '_3';
      var obj = $('#' + id);
      if (obj.html() == '' || obj.html() == '<TBODY></TBODY>') {
        initOddsPan('wnmOdds', id.split('_')[1], true);
      }
      if ($(this).text() == '更多游戏') {
        $(this).text('收起');
        $(this).next().attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_u_b.png');
      } else {
        $(this).text('更多游戏');
        $(this).next().attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_d_b.png');
        obj.find('div.portlet-content table').hide();
      }
    } else if (curGameIndex == 0) {
      var id = $(this).closest('table').attr('id');
      var obj = $('#' + id).closest('.portlet');
      obj.find('.portlet-content').show();
      if (obj.find('.portlet-content table:hidden').length > 0) {
        obj.find('div.portlet-content table').show();
        if (obj.find('.hafuOdds').html() == '' || obj.find('.hafuOdds').html() == '<TBODY></TBODY>') {
          initOddsPan('hafuOdds', id.split('_')[1], true);
        }
        if (obj.find('.ttgOdds').html() == '' || obj.find('.ttgOdds').html() == '<TBODY></TBODY>') {
          initOddsPan('ttgOdds', id.split('_')[1], true);
        }
        if (obj.find('.crsOdds').html() == '' || obj.find('.crsOdds').html() == '<TBODY></TBODY>') {
          initOddsPan('crsOdds', id.split('_')[1], true);
        }
        $(this).text('收起');
        $(this).next().attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_u_b.png');
      } else {
        $(this).text('更多游戏');
        $(this).next().attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_d_b.png');
        obj.find('div.portlet-content table').hide();
      }
    }
  });
  //隐藏一场比赛
  $(document).on('click', 'div.portlet-header .close', function () {
    $(this).closest('.portlet').toggle();
  });
  //奖金选择事件 header
  $(document).on('click', 'td.oddsPan span', function () {
    cleanSelectedStatus();
    // if ($(this).hasClass('oddsPanDis')) return;
    if ($(this).children('label').text() == '' || isNaN(Number($(this).children('label').text()))) return;

    var isSel = $(this).hasClass('oddsPanSel');
    if (curGameIndex == 0) {
      if (isSel) {
        //$(this).parent().children("div").children("img").css("visibility", "hidden");
        $(this).removeClass('oddsPanSel');
        if ($(this).closest('td').find('.oddsPanSel').length < 1) {
          $(this).parent().children('div').children('img').css('visibility', 'hidden');
        }
      } else {
        $(this).removeClass('oddsPanOver');
        $(this).addClass('oddsPanSel');
        $(this).parent().children('div').children('img').css('visibility', 'visible');
      }
    } else {
      if (isSel) {
        $(this).removeClass('oddsPanSel');
        if ($(this).closest('td').find('.oddsPanSel').length < 1) {
          $(this).parent().closest('table').find('tr:first').find('img').css('visibility', 'hidden');
        }
      } else {
        $(this).removeClass('oddsPanOver');
        $(this).addClass('oddsPanSel');
        $(this).parent().closest('table').find('tr:first').find('img').css('visibility', 'visible');
      }
    }
    var clkObjIndex = $(this).index();
    var clkTdIndex = $(this).closest('td').index();
    var id = $(this).closest('table').attr('id');
    var curData = gameData[curGameIndex];
    var mData = curData[Number(id.split('_')[1])];
    var matchNo = mData[0][0]; //赛事编号
    var poolName;
    if (curGameIndex == 0) {
      poolName = poolNameAry[curGameIndex][Number(id.split('_')[2])].nameStr;
      if (poolName.indexOf('胜平负') != -1) {
        var rqObj = $(this).closest('.oddsPan').find('.rqCls');

        if (rqObj.length == 1) {
          if (Number(rqObj.text()) == '[0]') {
            poolName = '胜平负';
          }
        } else if (clkObjIndex < 4) {
          poolName = '胜平负';
        } else if (clkObjIndex >= 4) {
          poolName = '让球胜平负';
        }
      }
    } else if (curGameIndex == 1) {
      var clkTdIndex = $(this).closest('tr').index();
      var pos = parseInt(clkTdIndex - 1);
      poolName = poolNameAry[curGameIndex][pos].nameStr;
    }
    var matchVS; //对阵信息
    if (curGameIndex == 0) {
      matchVS = mData[0][2];
    } else if (curGameIndex == 1) {
      matchVS = mData[0][2] + ' VS ' + mData[0][3];
    }
    var matchTime;
    if (curGameIndex == 0) {
      matchTime = mData[0][3];
    } else {
      matchTime = mData[0][4];
    }
    var optionName = ''; //投注项名称
    if (curGameIndex == 0) {
      if (clkObjIndex < 4) {
        optionName = oddsHeaderName[curGameIndex][0][clkObjIndex - 1];
      } else {
        optionName = oddsHeaderName[curGameIndex][1][clkObjIndex - 4];
      }
    } else if (curGameIndex == 1) {
      optionName = oddsHeaderName[curGameIndex][clkTdIndex - 1][clkObjIndex];
    }
    //判断已选项
    var isFind = -1;
    for (var i = 0; i < selectedAry.length; i++) {
      if (matchNo == selectedAry[i].matchNo && poolName == selectedAry[i].poolName) {
        isFind = i;
      }
    }

    var trIndex = 0;
    if (curGameIndex == 1) {
      var clkTdIndex = $(this).index();
      var pos = parseInt(clkTdIndex / 3);
      trIndex = pos;
    }

    if (
      !clkOddsPanHandler({
        isSel: isSel,
        isSingle: 0,
        odds: $(this).children('label').text(),
        id: id,
        isFind: isFind,
        matchNo: matchNo,
        poolName: poolName,
        matchVS: matchVS,
        matchTime: matchTime,
        optionName: optionName,
        tdIndex: clkObjIndex,
        trIndex: trIndex,
      })
    ) {
      $(this).removeClass('oddsPanSel');
      if (isMuchMatches) {
        if (curGameIndex == 0) {
          $(this).parent().children('div').children('img').css('visibility', 'hidden');
        } else {
          $(this).parent().closest('table').find('tr:first').find('img').css('visibility', 'hidden');
        }
      }
    }
  });
  //过关选项事件
  $(document).on('click', "input[name='ro']", function () {
    mnIndex = $(this).closest('span').index();
    calculate();
  });
  //混合过关
  $(document).on('click', "input[name='ck']", function () {
    var checkedIn = $("input[name='ck']:checked");
    mixedIndex = '';
    for (var i = 0; i < checkedIn.length; i++) {
      mixedIndex += $(checkedIn[i]).attr('index');
    }
    if (checkedIn.length == 0) {
      $('#consume').text('0');
      $('#bonus').text('0.00');
    } else {
      calculate();
    }
  });
  //选择面板行事件
  $(document).on('click', 'span.delSelTrBtn', function () {
    if (selectedAry.length == 0) {
      $('#clearSel').click();
      return;
    }
    var clkIndex = $(this).closest('tr').index();
    var curSelectedData = selectedAry[clkIndex - 1];
    selectedAry.splice(clkIndex - 1, 1);
    //同步到左侧
    $('#' + curSelectedData.id)
      .find('.oddsPanSel')
      .removeClass('oddsPanSel');
    aId.remove($(this).closest('tr').attr('id'));
    updateSelPan();
  });
  $(document).on('click', 'span.selOption', function () {
    clearInterval(intervalID);
    //删除选项
    var clkIndex = $(this).closest('tr').index();
    var clkOptionIndex = $(this).closest('span').index();
    var curSelectedData = selectedAry[clkIndex - 1];
    var poolName = curSelectedData.poolName;
    var matchNo = curSelectedData.matchNo;
    var optionStr = $(this).text();

    //同步到左侧
    var trIndex = Number(curSelectedData.oddsAry[clkOptionIndex].trIndex);
    var tdIndex = Number(curSelectedData.oddsAry[clkOptionIndex].tdIndex);

    if (curGameIndex == 0) {
      if (curSelectedData.id.split('_')[2] < 2) {
        $('#' + curSelectedData.id)
          .find('.oddsPan')
          .children()
          .eq(tdIndex)
          .removeClass('oddsPanSel oddsHighLight');
      } else {
        $('#' + curSelectedData.id)
          .find('tr')
          .eq(trIndex)
          .find('td')
          .eq(tdIndex)
          .find('span')
          .removeClass('oddsPanSel oddsHighLight');
      }
    } else if (curGameIndex == 1) {
      if (curSelectedData.id.split('_')[2] < 3) {
        $('#' + curSelectedData.id)
          .find('td')
          .eq(trIndex + 3)
          .children()
          .eq(tdIndex)
          .removeClass('oddsPanSel oddsHighLight');
      } else {
        $('#' + curSelectedData.id)
          .find('tr')
          .eq(trIndex)
          .find('td')
          .eq(tdIndex)
          .find('span')
          .removeClass('oddsPanSel oddsHighLight');
      }
    }

    //
    if (curSelectedData.oddsAry.length == 1) {
      selectedAry.splice(clkIndex - 1, 1);
      aId.remove($(this).closest('tr').attr('id'));
    } else {
      selectedAry[clkIndex - 1].oddsAry.splice(clkOptionIndex, 1);
    }
    updateSelPan();
  });
  //清除当前选中
  $(document).on('click', '#clearSel', function () {
    selectedAry = [];
    $('div.leftPan:eq(' + curGameIndex + ') span.oddsPanSel').removeClass('oddsPanSel');
    $('#passSelection').html('过关选择');
    $('#times').html('50');
    $('.mNameCls').find('img').css('visibility', 'hidden');
    $('.showMode').css('display', 'none');
    $('.matchBg').removeClass('boder-red');
    $('#multiple').text('50');
    times = 50;
    updateSelPan();
  });

  //加载cookie中的方案
  var htmlStr = '';
  for (var i = 0; i < 10; i++) {
    var cookieStr = getCookie('lotPlan' + i);
    if (cookieStr == null || cookieStr == 'null') {
      break;
    }
  }
  $('#planPan').html(htmlStr);
  $(document).on('click', "input[id ^= 'sel_']", function () {
    if ($(this).is(':checked')) {
      aLiner.push(Number($(this).attr('id').split('_')[1]));
      aId.push($(this).closest('tr').attr('id'));
    } else {
      aLiner.splice($.inArray(Number($(this).attr('id').split('_')[1]), aLiner), 1);
      aId.splice($.inArray($(this).closest('tr').attr('id'), aId), 1);
    }
    viewDetail(selectedAry.length, 0, 0, 0);
    //计算后赛事
    var finalAry = [];
    //取出设胆的赛事
    var dAry = [];
    var tAry = [];
    var obj = $(this).closest('table');
    for (var i = 0; i < selectedAry.length; i++) {
      var index = obj.find("input[id='sel_" + i + "']");
      if ($(index).is(':checked')) {
        dAry.push(i);
      } else {
        tAry.push(i);
      }
    }
    var optionStr = optionAry[selectedAry.length][mnIndex][1];
    if (parlay == 1) {
      //多选过关
      var checkedIn = $("input[name='ck']:checked");
      optionStr = '';
      for (var i = 0; i < checkedIn.length; i++) {
        optionStr += $(checkedIn[i]).attr('index');
      }
    }
    var tOptionStr = '';
    var minNum = 0;
    var maxNum = 0;
    for (var i = 0; i < optionStr.length; i++) {
      var cuOption = optionStr.charAt(i);
      var curMNNum = cuOption - dAry.length;
      var ary = [];
      if (curMNNum < 0) {
        ary = getCombinAryByNum(dAry, cuOption);
      } else if (curMNNum == 0) {
        ary = [dAry];
      } else if (curMNNum > 0) {
        if (curMNNum < tAry.length) {
          ary = getCombinAryByNum(tAry, curMNNum);
        } else if (curMNNum == tAry.length) {
          ary = [tAry];
        }
        if (ary.length > 0) {
          for (var j = 0; j < ary.length; j++) {
            ary[j] = dAry.concat(ary[j]);
          }
        }
      }
      for (var j = 0; j < ary.length; j++) {
        ary[j] = ary[j].sort();
        var obj = $("#viewDetailTbl tr[no='" + ary[j].join('') + "']");
        if (obj.length > 1) {
          var tmpMin = 500000;
          var tmpMax = 0;
          for (var m = 0; m < obj.length; m++) {
            var tmpNum = Number(obj.eq(m).children('td').last().text().replace('元', ' '));
            if (tmpNum < tmpMin) {
              tmpMin = tmpNum;
            }
            if (tmpNum > tmpMax) {
              tmpMax = tmpNum;
            }
          }
          maxNum += tmpMax;
          minNum += tmpMin;
        } else {
          var tmpNum = Number(obj.eq(0).children('td').last().text().replace('元', ' '));
          maxNum += tmpNum;
          minNum += tmpNum;
        }
      }
      $('#consume').text($('#viewDetailTbl tr').length * 2 * times);
      $('#bonus').text(Math.floor(maxNum * 100) / 100);
    }
  });
});
//判断ie6
lotFunc.isIE6 = function () {
  var browser = navigator.appName;
  var b_version = navigator.appVersion;
  var version = b_version.split(';');
  var trim_Version = version;
  if (version.length > 1) {
    trim_Version = version[1].replace(/[ ]/g, '');
  }
  if (browser == 'Microsoft Internet Explorer' && trim_Version == 'MSIE6.0') {
    return true;
  }
  return false;
};
//获取url参数
function requestURLPara() {
  var url = location.href;
  var returnValue = 0;
  if (url.indexOf('/lqhhgg') > 0) {
    returnValue = 1;
  }
  return returnValue;
}
//获取表单数据
function loadData(curGameIndex) {
  if (gameData[curGameIndex].length == 0) {
    $('#dialog_print').html("加载数据，请稍等...<p style='color:#888888'>如果长时间没反应，请刷新页面！</p>");
    $('#dialog_print').dialog({
      resizable: false,
      height: '100',
      width: '260',
      modal: true,
      title: '等待',
    });
    $('.ui-dialog-titlebar-close').hide(); //隐藏关闭按钮
    if (curGameIndex == 1) {
      setTimeout(dataTransferClass.getJsqMatchDate('', 2), 50);
    } else if (curGameIndex == 0) {
      setTimeout(dataTransferClass.getJsqMatchDate('', 1), 50);
    }
  }
}
//接口数据
function getData() {
  if (data.length == 0) {
    var otherIndex = Math.abs(1 - curGameIndex);
    //$("#dialog_print").html("<p>目前“" + gameName[curGameIndex] + "计算器”中无赛事列表！</p><a class='close_btn'  href='" + window.location.href.substring(0, window.location.href.indexOf("?")) + "?gameIndex=" + otherIndex + "'>" + gameName[otherIndex] + "计算器</a> <a class='close_btn' href='javascript:void(0);' onclick='closeOverlay()'>关闭</a>");
    if (curGameIndex == 0) {
      $('#fbPan .oddsList').html(noMatchShow);
    } else if (curGameIndex == 1) {
      $('#bkPan .oddsList').html(noMatchShow);
    }
    return;
  }
  gameData[curGameIndex] = data;
  var htmlStr = '';
  var gamesLen = 0;
  //足球赛事
  if (curGameIndex == 0) {
    gamesLen = gameData[curGameIndex].length;
    for (var i = 0; i < gameData[curGameIndex].length; i++) {
      var sortNumA = '';
      if (gameData[curGameIndex][i][0][9] != undefined && gameData[curGameIndex][i][0][9] != '') {
        //sortNumA = "<label class='sortLbl'>[" + gameData[curGameIndex][i][0][9] + "]</label>";
      }
      var sortNumH = '';
      if (gameData[curGameIndex][i][0][10] != undefined && gameData[curGameIndex][i][0][10] != '') {
        //sortNumH = "<label class='sortLbl'>[" + gameData[curGameIndex][i][0][10] + "]</label>";
      }
      var classStr0 = '';
      var classStr1 = '';
      //return;
      if (gameData[curGameIndex][i][5] != undefined && gameData[curGameIndex][i][5][3] > 1) classStr0 = "class='oddsPanDis'";
      if (gameData[curGameIndex][i][1][3] > 1) classStr1 = "class='oddsPanDis'";
      var vsAry = gameData[curGameIndex][i][0][2].split('$');

      var vsHtm =
        "<a class='AgainstInfo'>" +
        sortNumA +
        "<lable title='" +
        gameData[curGameIndex][i][0][7] +
        "'>" +
        vsAry[0] +
        "</label>&nbsp;&nbsp;VS&nbsp;&nbsp;<lable title='" +
        gameData[curGameIndex][i][0][8] +
        "'>" +
        vsAry[vsAry.length - 1] +
        '</label>' +
        sortNumH +
        '</a>';
      var ball = vsAry[1].split('*');
      var rqStr = '';
      var rqStr0 = '';
      if (ball.length > 0) {
        if (ball[1] != '--') {
          rqStr = ball[1] ? Number(ball[1]) : '0';
        } else {
          rqStr = '未';
        }
        if (ball[0] != '--') {
          rqStr0 = ball[0] ? Number(ball[0]) : '0';
        } else {
          rqStr0 = '未';
        }
      }
      var h0 = '--',
        h1 = '--',
        d0 = '--',
        d1 = '--',
        a0 = '--',
        a1 = '--';
      h1 = checkOdds(gameData[curGameIndex][i][1][0], 1);
      if (gameData[curGameIndex][i][5] != undefined) h0 = checkOdds(gameData[curGameIndex][i][5][0], 1);
      d1 = checkOdds(gameData[curGameIndex][i][1][1], 1);
      if (gameData[curGameIndex][i][5] != undefined) d0 = checkOdds(gameData[curGameIndex][i][5][1], 1);
      a1 = checkOdds(gameData[curGameIndex][i][1][2], 1);
      if (gameData[curGameIndex][i][5] != undefined) a0 = checkOdds(gameData[curGameIndex][i][5][2], 1);

      var oddsStr0 = '';
      var oddsStr1 = '';
      if (rqStr > 0) {
        rqStr = '+' + rqStr;
      }
      if (h0 != '') {
        if (h0 == '--') {
          classStr0 = "class='oddsPanDis'";
        }
        oddsStr0 =
          "<label class='rqCls red'>" +
          rqStr0 +
          '</label><span ' +
          classStr0 +
          '>' +
          h0 +
          '</span><span ' +
          classStr0 +
          '>' +
          d0 +
          '</span><span ' +
          classStr0 +
          '>' +
          a0 +
          '</span>';
        if (h1 != '')
          oddsStr0 =
            '<span ' +
            classStr0 +
            '><b>胜</b></br><label>' +
            h0 +
            '</label></span><span ' +
            classStr0 +
            '><b>平</b></br><label>' +
            d0 +
            '</label></span><span ' +
            classStr0 +
            '><b>负</b></br><label>' +
            a0 +
            '</label></span>';
      }
      if (h1 != '') {
        if (h1 == '--') {
          classStr1 = "class='oddsPanDis'";
        }
        oddsStr1 =
          '<span ' +
          classStr1 +
          ' ><b>胜</b></br><label>' +
          h1 +
          '</label></span><span ' +
          classStr1 +
          '><b>平</b></br><label>' +
          d1 +
          '</label></span><span ' +
          classStr1 +
          '><b>负</b></br><label>' +
          a1 +
          '</label></span>';
      }
      var tmpDate = gameData[curGameIndex][i][0][11];
      var weekObj = getWeek(tmpDate);
      var d = tmpDate.split(' ')[0];
      var cc = '';
      var is_have = false;

      for (var j = 0; j < dateAry.length; j++) {
        if (dateAry[j] == d) {
          is_have = true;
          break;
        }
      }

      if (!is_have) dateAry.push(d);

      var index = 0;
      for (var j = 0; j < dateAry.length; j++) {
        if (dateAry[j] == d) {
          index = j;
          break;
        }
      }
      if (matchIdsAry[index]) {
        matchIdsAry[index].push(gameData[curGameIndex][i][0][4]);
      } else {
        matchIdsAry[index] = [];
        matchIdsAry[index][0] = gameData[curGameIndex][i][0][4];
      }
      if (!is_have) {
        cc =
          "<div class='weeks' bIndex='" +
          index +
          "'><div style='float:left;padding-left:2%;'>周" +
          weekObj.cn +
          ' ' +
          tmpDate +
          " [共<label id='m_" +
          index +
          "'></label>场比赛] </div><div class='hideCss'><img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/hide.png'> <a href='javascript:void(0);' class='bDateHide' onclick='return false;'>隐藏</a></div></div>";
      }
      portletHtm = "<div class='portlet ui-widget matches_" + index + "'><div class='portlet-header ui-widget-header ui-corner-all'>";
      htmlStr +=
        cc +
        portletHtm +
        "<table cellpadding='0' cellspacing='0' id='d_" +
        i +
        "_1' width='100%'><tr>" +
        "<td class='mCodeCls' width='23%'><div class='mNameCls' title='" +
        gameData[curGameIndex][i][0][6] +
        "'>" +
        gameData[curGameIndex][i][0][1] +
        "</div> <div class='matchTime'>" +
        gameData[curGameIndex][i][0][0] +
        "<br/><span class='dateCls'>" +
        gameData[curGameIndex][i][0][3].substr(5) +
        '</span></div></td>' +
        "<td class='oddsPan' width='12%'><div class='mNameCls'>&nbsp;</div><div class='rqCls red'>[" +
        rqStr0 +
        "]</div><div class='rqCls red'>[" +
        rqStr +
        ']</div></td>' +
        "<td class='oddsPan'><div class='mNameCls'>" +
        vsHtm +
        "<img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/selectMatch.gif' class='selectMatch'></div>" +
        oddsStr0 +
        oddsStr1 +
        '</td>' +
        "</tr><tr><td colspan='3' align='right' style='padding-right:4%; padding-top:2%;'><label class='toggle' title='展开/关闭' >更多游戏</label>&nbsp;<img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_d_b.png' width='12'></td></tr></table></div><div class='portlet-content'><table cellpadding='0' cellspacing='0' id='d_" +
        i +
        "_4' class='hafuOdds' width='100%'></table><table cellpadding='0' cellspacing='0' id='d_" +
        i +
        "_3' style='border-bottom: none;' class='ttgOdds' width='100%'></table><table cellpadding='0' cellspacing='0' id='d_" +
        i +
        "_2' class='crsOdds'  width='100%;'></table></div><hr></div>";
    }
  } else {
    for (var i = 0; i < gameData[curGameIndex].length; i++) {
      var classMNL = '';
      if (gameData[curGameIndex][i][1][2] > 1 || gameData[curGameIndex][i][1][2] == '') classMNL = "class='oddsPanDis'";
      var classHDC = '';
      if (gameData[curGameIndex][i][2][3] > 1 || gameData[curGameIndex][i][2][0] == '') classHDC = "class='oddsPanDis'";
      var classHILO = '';
      if (gameData[curGameIndex][i][3][3] > 1 || gameData[curGameIndex][i][3][0] == '') classHILO = "class='oddsPanDis'";
      var tmpDate = gameData[curGameIndex][i][0][12];
      var weekObj = getWeek(tmpDate);
      var d = tmpDate.split(' ')[0];
      var cc = '';
      var is_have = false;
      for (var j = 0; j < dateAry.length; j++) {
        if (dateAry[j] == d) {
          is_have = true;
          break;
        }
      }
      if (!is_have) dateAry.push(d);

      var index = 0;
      for (var j = 0; j < dateAry.length; j++) {
        if (dateAry[j] == d) {
          index = j;
          break;
        }
      }
      if (matchIdsAry[index]) {
        matchIdsAry[index].push(gameData[curGameIndex][i][0][5]);
      } else {
        matchIdsAry[index] = [];
        matchIdsAry[index][0] = gameData[curGameIndex][i][0][5];
      }
      if (!is_have) {
        var cc =
          "<div class='weeks' bIndex='" +
          index +
          "'><div style='float:left;padding-left:2%;'>周" +
          weekObj.cn +
          ' ' +
          tmpDate +
          " [共<label id='m_" +
          index +
          "'></label>场比赛] </div><div class='hideCss'><img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/hide.png'> <a href='javascript:void(0);' class='bDateHide' onclick='return false;'>隐藏</a></div></div>";
      }
      portletHtm = "<div class='portlet ui-widget matches_" + index + "'><div class='portlet-header ui-widget-header ui-corner-all'>";

      var vsHtm =
        "<div class='mNameCls'><a class='AgainstInfo'><label title='" +
        gameData[curGameIndex][i][0][8] +
        "'>" +
        gameData[curGameIndex][i][0][2] +
        "</label>&nbsp;&nbsp;VS&nbsp;&nbsp;<label title='" +
        gameData[curGameIndex][i][0][9] +
        "'>" +
        gameData[curGameIndex][i][0][3] +
        "</label></a><img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/selectMatch.gif'  class='selectMatch'></div>";
      var hilofsStr = gameData[curGameIndex][i][3][0] ? parseFloat(gameData[curGameIndex][i][3][0]) : '未';
      var rfStr = gameData[curGameIndex][i][2][0] ? parseFloat(gameData[curGameIndex][i][2][0]) : '未';
      if (rfStr > 0) rfStr = '+' + rfStr;
      htmlStr +=
        cc +
        portletHtm +
        "<table cellpadding='0' cellspacing='0' style='width:100%' id='b_" +
        i +
        "_0'><tr  style='background-color:#f6f6f6'>" +
        "<td width='23%'><div class=''>" +
        gameData[curGameIndex][i][0][0] +
        "<span class='dateCls'>" +
        gameData[curGameIndex][i][0][4].substr(5) +
        '</span></div>' +
        "</td><td width='18%' class='lname'>" +
        gameData[curGameIndex][i][0][1] +
        '</td><td>' +
        vsHtm +
        '</td></tr><tr>' +
        "<td width='10%' class='game_title'>胜负</td><td width='5%'>&nbsp;</td>" +
        "<td class='oddsPan'><span " +
        classMNL +
        '><b>主负</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][1][0], 1) +
        '</label></span><span ' +
        classMNL +
        '><b>主胜</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][1][1], 1) +
        '</label></span></td>' +
        '</tr><tr>' +
        "<td width='15%' class='game_title'>让分胜负</td><td width='5%'><label  class='red'><b style='font-family: Verdana, Arial Unicode MS;'>[" +
        rfStr +
        ']</b></label></td>' +
        "<td class='oddsPan'><span " +
        classHDC +
        '><b>主负</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][2][1], 1) +
        '</label></span><span ' +
        classHDC +
        '><b>主胜</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][2][2], 1) +
        '</label></span></td>' +
        '</tr><tr>' +
        "<td width='15%' class='game_title'>大小分</td><td width='5%'><label class='red'><b style='font-family: Verdana, Arial Unicode MS;'>[" +
        hilofsStr +
        ']</b></label></td>' +
        "<td class='oddsPan'><span " +
        classHILO +
        '><b>大分</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][3][1], 1) +
        '</label></span><span ' +
        classHILO +
        '><b>小分</b><Br><label>' +
        checkOdds(gameData[curGameIndex][i][3][2], 1) +
        '</label></span></td>' +
        '</tr><tr>' +
        "<td colspan='3' align='right' style='padding-right:4%; padding-top:2%;'><label class='toggle' title='展开/关闭'>更多游戏</label>&nbsp;<img src='//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/arrow_d_b.png' width='12'></td>" +
        "</tr></table></div><div class='portlet-content'><table style='width:100%;' cellpadding='0' cellspacing='0' id='b_" +
        i +
        "_3' class='wnmOdds'></table></div><hr></div>";
    }
  }
  $('div.leftPan:eq(' + curGameIndex + ') .oddsList').html(htmlStr);
  for (var z = 0; z < matchIdsAry.length; z++) {
    $('#m_' + z).html(matchIdsAry[z].length);
  }
  var h = $('div.leftPan:eq(' + curGameIndex + ') .oddsList').height();
  if (Number(h) < 210) {
    //$("#container").height(270);
  }
  //隐藏内容
  $('div.leftPan:eq(' + curGameIndex + ') div.portlet-content').hide();
  //表头宽度
  var headObj = $('div.leftPan:eq(' + curGameIndex + ') div.listHead td');
  var oddsListTd = $('div.leftPan:eq(' + curGameIndex + ') div.oddsList tr:eq(0) td');
  for (var i = 0; i < headObj.length; i++) {
    headObj.eq(i).width(oddsListTd.eq(i).width());
  }
  if (gameData[Math.abs(1 - curGameIndex)].length == 0) {
    //显示全部
    $('#showAllBtn').click(function () {
      $('div.leftPan:eq(' + curGameIndex + ') div.portlet').show();
    });
  }
  $('#dialog_print').dialog('close');
  showSelectLottery();
}

function getWeek(tmpDate) {
  var nd = new Date(tmpDate.replace(/-/g, '/'));
  switch (nd.getDay()) {
    case 0:
      return { num: 0, cn: '日' };
      break;
    case 1:
      return { num: 1, cn: '一' };
      break;
    case 2:
      return { num: 2, cn: '二' };
      break;
    case 3:
      return { num: 3, cn: '三' };
      break;
    case 4:
      return { num: 4, cn: '四' };
      break;
    case 5:
      return { num: 5, cn: '五' };
      break;
    case 6:
      return { num: 6, cn: '六' };
      break;
    default:
      return { num: '?', cn: '?' };
      break;
  }
}
function checkOdds(odds, style) {
  if (odds == undefined || Number(odds) == 0) {
    if (style == 1) return '--';
    else return '&nbsp;&nbsp;--&nbsp;&nbsp;';
  } else {
    return odds;
  }
}

function initOddsPan(panClass, opInx, once) {
  var htmlStr = '';
  var className = '';
  var tblID = '';
  var curData = gameData[curGameIndex];
  var css = '';
  switch (panClass) {
    case 'crsOdds': //比分
      var html1 = '';
      var html2 = '';
      var html3 = '';
      //暂停销售
      if (curData[opInx][2][curData[opInx][2].length - 1] > 1 || curData[opInx][2][curData[opInx][2].length - 1] == '') className = 'oddsPanDis';
      for (var j = 0; j < curData[opInx][2].length - 2; j++) {
        if (j < 13) {
          html1 += "<span class='width19 " + className + "'><div>" + oddsHeaderName[curGameIndex][2][j] + '</div><label>' + checkOdds(curData[opInx][2][j]) + '</label></span>';
        } else if (j < 18) {
          html2 += "<span class='width19 " + className + "'><div>" + oddsHeaderName[curGameIndex][2][j] + '</div><label>' + checkOdds(curData[opInx][2][j]) + '</label></span>';
        } else {
          html3 += "<span class='width19 " + className + "'><div>" + oddsHeaderName[curGameIndex][2][j] + '</div><label>' + checkOdds(curData[opInx][2][j]) + '</label></span>';
        }
      }
      var floatStr = '<font></font>';
      if (curData[opInx][2][curData[opInx][2].length - 2] == 1) {
      }
      htmlStr +=
        "<tr><td align='left'  class='game_title'>比分" + floatStr + '</td></tr><tr><td>' + html1 + '</td></tr><tr><td>' + html2 + '</td></tr><tr><td>' + html3 + '</td></tr>';
      tblID = '#d_' + opInx + '_2';
      break;
    case 'ttgOdds': //总进球
      var htm1 = '';
      var htm2 = '';
      if (curData[opInx][3][curData[opInx][3].length - 1] > 1 || curData[opInx][3][curData[opInx][3].length - 1] == '') className = 'oddsPanDis';
      for (var j = 0; j < curData[opInx][3].length - 1; j++) {
        htm2 += "<span class='width24 " + className + "'><div>" + oddsHeaderName[curGameIndex][3][j] + '</div><label>' + checkOdds(curData[opInx][3][j]) + '</label></span>';
      }
      htmlStr += "<tr><td align='left' class='game_title'>总进球</td></tr><tr><td>" + htm2 + '</td></tr>';
      tblID = '#d_' + opInx + '_3';

      break;
    case 'hafuOdds': //半全场
      var htm1 = '';
      var htm2 = '';
      if (curData[opInx][4][curData[opInx][4].length - 1] > 1 || curData[opInx][4][curData[opInx][4].length - 1] == '') className = 'oddsPanDis';

      for (var j = 0; j < curData[opInx][4].length - 1; j++) {
        if (curData[opInx][4][j] == '' || curData[opInx][4][j] == null) {
          //是否显示为横线
          htm2 += "<span class='width32 " + className + "'><div>" + oddsHeaderName[curGameIndex][4][j] + "</div><label><em  class='middle-line'>  --  </em></label></span>";
        } else {
          htm2 += "<span class='width32 " + className + "'><div>" + oddsHeaderName[curGameIndex][4][j] + '</div><label>' + checkOdds(curData[opInx][4][j]) + '</label></span>';
        }
      }
      htmlStr += "<tr><td align='left' class='game_title'>半全场胜平负</td></tr><tr><td>" + htm2 + '</td></tr>';
      tblID = '#d_' + opInx + '_4';
      break;
    case 'wnmOdds': //胜分差
      var htm1 = '';
      var htm2 = '';
      var htm3 = '';

      if (curData[opInx][4][curData[opInx][4].length - 1] > 1) css = " class ='oddsPanDis'";
      for (var j = 0; j < curData[opInx][4].length - 2; j++) {
        var title = '';
        if (checkOdds(curData[opInx][4][j]) == '&nbsp;&nbsp;--&nbsp;&nbsp;') {
          css = " class ='oddsPanDis'";
        }
        if (j < 6) {
          title = '客胜';
          htm1 +=
            "<span style='width:32%'" + css + '><div>' + title + oddsHeaderName[curGameIndex][3][j + 1] + '</div><label>' + checkOdds(curData[opInx][4][j]) + '</label></span>';
        } else {
          title = '主胜';
          htm1 +=
            "<span style='width:32%'" + css + '><div>' + title + oddsHeaderName[curGameIndex][3][j + 2] + '</div><label>' + checkOdds(curData[opInx][4][j]) + '</label></span>';
        }
      }

      htmlStr += "<tr><td align='left' class='game_title'>胜分差</td></tr><tr><td>" + htm1 + '</td></tr>';

      tblID = '#b_' + opInx + '_3';
      break;
  }
  $(tblID).html(htmlStr);
  $(tblID).show();
  addMouseHandle(tblID);
  if (!once) {
    var curData = gameData[curGameIndex];
    if (opInx < curData.length - 1) {
      setTimeout(function () {
        initOddsPan(panClass, opInx + 1, false);
      }, 1);
    } else {
      if ($('#' + panClass.replace('Odds', 'Chk')).prop('checked') == true) {
        $('table.' + panClass).show();
      } else {
        $('table.' + panClass).hide();
      }
    }
  }
}
function addMouseHandle(selector) {
  $(selector + ' span').click(function () {
    // if ($(this).hasClass('oddsPanDis')) return;
    if ($(this).children('label').text() == '' || isNaN(Number($(this).children('label').text()))) return;

    var optionName = ''; //投注项名称
    //var clkObjIndex = $(this).closest("td").index();
    var clkTrIndex = $(this).closest('tr').index();
    var clkObjIndex = $(this).index();
    var id = $(this).closest('table').attr('id');
    var poolIndex = Number(id.split('_')[2]);
    var poolName = poolNameAry[curGameIndex][Number(id.split('_')[2])].nameStr; //游戏名称

    var curData = gameData[curGameIndex];
    var mData = curData[Number(id.split('_')[1])];
    var isSingle = 0;
    optionName = oddsHeaderName[curGameIndex][poolIndex][clkObjIndex];
    //比分
    if (curGameIndex == 0 && poolIndex == 2) {
      optionName = $(this).children('div').text();
      isSingle = mData[2][mData[2].length - 2];
    }
    if (curGameIndex == 1 && poolIndex == 3) {
      var t = '客胜';
      if (clkObjIndex < 6) {
        clkObjIndex++;
      } else {
        clkObjIndex = clkObjIndex + 2;
        var t = '主胜';
      }
      optionName = t + oddsHeaderName[curGameIndex][poolIndex][clkObjIndex];
    }
    var matchNo = mData[0][0]; //赛事编号
    var matchVS; //对阵信息
    if (curGameIndex == 0) {
      matchVS = mData[0][2];
    } else {
      matchVS = mData[0][2] + ' VS ' + mData[0][3];
    }
    var matchTime;
    if (curGameIndex == 0) {
      matchTime = mData[0][3];
    } else if (curGameIndex == 1) {
      matchTime = mData[0][4];
    }
    var isSel = $(this).hasClass('oddsPanSel');
    if (isSel) {
      $(this).removeClass('oddsPanSel');
      //$(this).closest("table").parent().prev().find("img:first").css("visibility", "hidden");
      if ($(this).closest('td').find('.oddsPanSel').length < 1) {
        $(this).closest('table').parent().prev().find('img:first').css('visibility', 'hidden');
      }
    } else {
      $(this).removeClass('oddsPanOver');
      $(this).addClass('oddsPanSel');
      $(this).closest('table').parent().prev().find('img:first').css('visibility', 'visible');
    }
    //判断已选项
    var isFind = -1;
    for (var i = 0; i < selectedAry.length; i++) {
      if (matchNo == selectedAry[i].matchNo && poolName == selectedAry[i].poolName) {
        isFind = i;
      }
    }
    if (
      !clkOddsPanHandler({
        isSel: isSel,
        isSingle: isSingle,
        odds: $(this).children('label').text(),
        id: id,
        isFind: isFind,
        matchNo: matchNo,
        poolName: poolName,
        matchVS: matchVS,
        matchTime: matchTime,
        optionName: optionName,
        tdIndex: clkObjIndex,
        trIndex: clkTrIndex,
      })
    ) {
      $(this).removeClass('oddsPanSel');
      if (isMuchMatches) {
        $(this).closest('table').parent().prev().find('img:first').css('visibility', 'hidden');
      }
    }
  });
}
function clkOddsPanHandler(obj) {
  $('#selDetailBtn').removeClass('detailBtnClk boder-red');
  $('#selDetailDiv').css('display', 'none');
  if (typeof slider == 'object') {
    slider.destroySlider();
  }

  if (obj.isSel) {
    //取消
    if (obj.isFind < 0) return;
    for (var j = 0; j < selectedAry[obj.isFind].oddsAry.length; j++) {
      if (selectedAry[obj.isFind].oddsAry[j].optionName == obj.optionName) {
        if (selectedAry[obj.isFind].oddsAry.length == 1) {
          selectedAry.splice(obj.isFind, 1);
        } else {
          selectedAry[obj.isFind].oddsAry.splice(j, 1);
        }
        break;
      }
    }
  } else {
    //选中
    if (obj.isFind == -1) {
      //判断是否超过场次
      if (checkSameMath(obj.matchNo) && checkMathCount(obj.poolName)) {
        selectedAry.push({
          id: obj.id,
          matchNo: obj.matchNo,
          poolName: obj.poolName,
          matchVS: obj.matchVS,
          matchTime: obj.matchTime,
          oddsAry: [
            {
              optionName: obj.optionName,
              odds: obj.odds,
              tdIndex: obj.tdIndex,
              trIndex: obj.trIndex,
            },
          ],
          isSingle: obj.isSingle,
        });
      } else {
        if ($('#optionTip').html() != '') {
          //$("#optionTip").fadeOut(3000);
          clearInterval(clearIntval);
          clearIntval = setInterval('clearTip()', 3000);
        }

        return false;
      }
    } else {
      selectedAry[obj.isFind].oddsAry.push({
        optionName: obj.optionName,
        odds: obj.odds,
        tdIndex: obj.tdIndex,
        trIndex: obj.trIndex,
      });
    }
  }

  //checkExceed();
  updateSelPan();
  return true;
}

function checkSameMath(matchNo) {
  isMuchMatches = false;
  for (var i = 0; i < selectedAry.length; i++) {
    if (matchNo == selectedAry[i].matchNo) {
      //alert("一场比赛中，只允许选择一个游戏进行过关！");
      $('#optionTip').css('display', 'block');
      $('#optionTip').html('一场比赛中，只允许选择一个游戏进行过关！');
      return false;
    }
  }
  return true;
}
function clearTip() {
  clearInterval(clearIntval);
  $('#optionTip').fadeOut();
}
function checkMathCount(poolName) {
  isMuchMatches = false;
  var isMix = false;
  var poolAry = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var tmpStr = '-';
  for (var i = 0; i < selectedAry.length; i++) {
    tmpStr += selectedAry[i].poolName + '-';
  }
  poolAry[0] = tmpStr.split('-胜平负').length - 1;
  poolAry[1] = tmpStr.split('-让球胜平负').length - 1;
  poolAry[2] = tmpStr.split('-比分').length - 1;
  poolAry[3] = tmpStr.split('-总进球').length - 1;
  poolAry[4] = tmpStr.split('-半全场').length - 1;
  poolAry[5] = tmpStr.split('-胜负').length - 1;
  poolAry[6] = tmpStr.split('-让分胜负').length - 1;
  poolAry[7] = tmpStr.split('-大小分').length - 1;
  poolAry[8] = tmpStr.split('-胜分差').length - 1;

  switch (poolName) {
    case '胜平负':
      poolAry[0] += 1;
      break;
    case '让球胜平负':
      poolAry[1] += 1;
      break;
    case '比分':
      poolAry[2] += 1;
      break;
    case '总进球':
      poolAry[3] += 1;
      break;
    case '半全场':
      poolAry[4] += 1;
      break;
    case '胜负':
      poolAry[5] += 1;
      break;
    case '让分胜负':
      poolAry[6] += 1;
      break;
    case '大小分':
      poolAry[7] += 1;
      break;
    case '胜分差':
      poolAry[8] += 1;
      break;
  }

  var totalCount;

  if (curGameIndex == 0) {
    totalCount = poolAry[0] + poolAry[1] + poolAry[2] + poolAry[3] + poolAry[4];

    if (totalCount > 8) {
      isMuchMatches = true;
      //alert("过关数量不能超过8场赛事!");
      $('#optionTip').css('display', 'block');
      $('#optionTip').html('过关数量不能超过8场赛事！');
      return;
    }
  } else if (curGameIndex == 1) {
    totalCount = poolAry[5] + poolAry[6] + poolAry[7] + poolAry[8];
    if (totalCount > 8) {
      isMuchMatches = true;
      //alert("过关数量不能超过8场赛事!");
      $('#optionTip').css('display', 'block');
      $('#optionTip').html('过关数量不能超过8场赛事！');
      return;
    }
  } else {
    if (totalCount > 8) {
      isMuchMatches = true;
      //alert("过关数量不能超过8场赛事!");
      $('#optionTip').css('display', 'block');
      $('#optionTip').html('过关数量不能超过8场赛事！');
      return;
    }
  }
  return true;
}
function updateSelPan(flag) {
  $('#selCount').html(selectedAry.length);
  if (selectedAry.length == 0) {
    $('#lastTime').html('');
    $('#optionList').html('');
    $('#optionList').attr('mn', selectedAry.length);
    $('#selDetailTbl').html('');
    $('#consume').html('0');
    $('#bonus').html('0.00');
    $('#selDetailBtn').removeClass('detailBtnClk');
    calculate();
    return;
  } else if (selectedAry.length == 1) {
    $('#consume').html('0');
    $('#bonus').html('0.00');
  }
  var disFlag = '';
  if (parlay == 1 || parlay == '1') {
    disFlag = 'disabled';
  }
  //最终截止时间
  var mixNum = 1812312359;
  var index = 0;
  var htmlStr = '';
  for (var i = 0; i < selectedAry.length; i++) {
    var num = selectedAry[i].matchTime.replace(/-/g, '');
    num = num.replace(' ', '');
    num = Number(num.replace(':', ''));
    if (num < mixNum) {
      mixNum = num;
      index = i;
    }
    htmlStr +=
      "<tr id='s" +
      selectedAry[i].id +
      "' class='selTr'><td><span class='delSelTrBtn'>×</span></td><td>" +
      selectedAry[i].poolName +
      '</td><td>' +
      selectedAry[i].matchNo +
      '</td><td>';
    for (var j = 0; j < selectedAry[i].oddsAry.length; j++) {
      htmlStr += "<span class='selOption'>" + selectedAry[i].oddsAry[j].optionName + '</span>';
    }
    htmlStr += "</td><td><input type='checkbox' class='danChk' id='sel_" + i + "'></td></tr>";
  }
  $('#selDetailTbl').html(htmlStr);
  $('#lastTime').html(selectedAry[index].matchTime);
  //设胆
  if (aId.length > 0) {
    for (var h = 0; h < aId.length; h++) {
      $('#' + aId[h])
        .children('td')
        .last()
        .children('input')
        .first()
        .prop('checked', true);
    }
  }
  //过关方式
  if ((selectedAry.length < optionAry.length && selectedAry.length != $('#optionList').attr('mn')) || flag == true) {
    var mnOptionStr = '';
    if (selectedAry.length == 1 && selectedAry[0].poolName == '比分' && selectedAry[0].isSingle == 1) {
      //mnOptionStr = "单关";
    } else {
      for (var i = 0; i < optionAry[selectedAry.length].length; i++) {
        var defaultChedk = '';
        if (i == 0 && isExceed != true) defaultChedk = 'checked';
        if (parlay == 0) {
          var isDisabled = '';
          if (isExceed) {
            isDisabled = 'disabled';
          }
          mnOptionStr += "<span><input type='radio' name='ro' " + defaultChedk + ' />' + optionAry[selectedAry.length][i][0] + '</span>';
        }
      }
      if (parlay == 1) {
        var obj = getPoolAry(null);
        var poolAry = obj.ary;
        var totalCount = obj.tCount;
        var optionLen = totalCount;
        if (curGameIndex == 0) {
          if (poolAry[3] > 0 && totalCount > 6) {
            optionLen = 6;
          }
          if (poolAry[2] > 0 && totalCount > 4) {
            optionLen = 4;
          }
          if (poolAry[4] > 0 && totalCount > 4) {
            optionLen = 4;
          }
        } else if (curGameIndex == 1) {
          if (poolAry[8] > 0 && totalCount > 4) {
            optionLen = 4;
          }
        }

        for (var k = 2; k < optionLen + 1; k++) {
          var dc = '';
          if (optionLen == k) {
            dc = 'checked';
          }
          mnOptionStr += '<span><input  index=' + k + " type='checkbox' name='ck' " + dc + ' />' + k + 'x1</span>';
        }
      }
    }
    $('#optionList').html(mnOptionStr);
    mnIndex = 0;
    $('#optionList').attr('mn', selectedAry.length);
  }
  aLiner.length = 0;
  var inputs = $("input[class='danChk']");
  for (var j = 0; j < inputs.length; j++) {
    if ($(inputs[j]).is(':checked')) {
      aLiner.push($(inputs[j]).closest('tr').index() - 1);
    }
  }
  //计算
  calculate();
}
function calculate(isDetail) {
  //先清空结果
  if (selectedAry.length == 0) {
    return;
  }
  //过关方式
  if ($('#optionList').text() == '') {
    updateSelectedGuan();
    initSelectPannel();
    return;
  }
  //查找复选最大值和最小值
  var calAry = [];
  var calMinAry = [];
  var multiCountAry = [];
  for (var i = 0; i < selectedAry.length; i++) {
    multiCountAry.push(selectedAry[i].oddsAry.length);
    var minValue = 10000000;
    var maxValue = 1;
    for (var j = 0; j < selectedAry[i].oddsAry.length; j++) {
      var oddsValue = Number(selectedAry[i].oddsAry[j].odds);
      if (oddsValue > maxValue) {
        maxValue = oddsValue;
      }
      if (oddsValue < minValue) {
        minValue = oddsValue;
      }
    }
    calMinAry.push(minValue);
    calAry.push(maxValue);
  }
  //排序
  calAry = calAry.sort();
  calMinAry = calMinAry.sort();

  var maxBonus = 0;
  var minBonus = 0;
  var mnCount = 0;
  if ($('#optionList').text() == '单关') {
    maxBonus = calAry[0];
  } else {
    var combinOptionStr;
    if (parlay == 0 && isExceed == false) {
      combinOptionStr = optionAry[selectedAry.length][mnIndex][1];
    } else if (parlay == 1) {
      var checkedIn = $("input[name='ck']:checked");
      mixedIndex = '';
      for (var i = 0; i < checkedIn.length; i++) {
        mixedIndex += $(checkedIn[i]).attr('index');
      }
      combinOptionStr = mixedIndex.toString();
    }

    if (selectedAry.length > 1) {
      for (var i = 2; i <= selectedAry.length; i++) {
        var optionPara = '';

        for (var j = 0; j < combinOptionStr.length; j++) {
          var tmpStr = combinOptionStr.charAt(j);
          if (Number(tmpStr) <= i) {
            optionPara += tmpStr;
          }
        }

        if (optionPara != '') {
          var obj;
          if (i == selectedAry.length) {
            obj = getBonus(optionPara, calAry, calMinAry, i, multiCountAry);
          } else {
            obj = getBonus(optionPara, calAry, calMinAry, i, null);
          }
          if (i == selectedAry.length) {
            maxBonus = obj.maxBonus;
            minBonus = obj.minBonus;
            mnCount = obj.mnCount;
          }
        }
      }
    }
  }
  if (isDetail) {
    viewDetail(selectedAry.length, maxBonus, minBonus, mnCount);
  } else if (aLiner.length > 0) {
    var inChecked = $("input[class='danChk']:checked");
    if (inChecked.length > 0) {
      $(inChecked[0]).click();
      $(inChecked[0]).click();
    }
  } else {
    var money = mnCount * 2 * times;
    $('.plan').css('background-color', '#f84a4a');
    $('.plan').css('pointer-events', 'auto');
    $('#consume').html(mnCount * 2 * times);
    $('#bonus').html(commafy(maxBonus).toFixed(2));
    if (money >= init_money) {
      alert('温馨提示：当前投注金额已超' + init_money + '元，请理性购彩。');
    }
  }
  updateSelectedGuan();
  initSelectPannel();
}
function getBonus(optionsStr, oddMaxAry, oddMinAry, goalCount, multiCountAry) {
  var len = oddMaxAry.length;
  oddMaxAry = oddMaxAry.slice(len - goalCount);
  oddMinAry = oddMinAry.slice(0, goalCount);
  var maxBonus = 0;
  var minBonus = 0;
  var mnCount = 0;
  for (var i = 0; i < optionsStr.length; i++) {
    var resultAry = getCombinAryByNum(oddMaxAry, Number(optionsStr.charAt(i)));

    if (multiCountAry != null) {
      var tmpAry = getCombinAryByNum(multiCountAry, Number(optionsStr.charAt(i)));
      for (var m = 0; m < tmpAry.length; m++) {
        tmpAry[m] = tmpAry[m].join('*');
      }
      mnCount += eval(tmpAry.join('+'));
    }
    for (var j = 0; j < resultAry.length; j++) {
      var tmpBonus = eval(resultAry[j].join('*'));
      maxBonus += oddsMNLimit(tmpBonus, resultAry[j].length);
    }
    var resultMinAry = getCombinAryByNum(oddMinAry, Number(optionsStr.charAt(i)));
    for (var j = 0; j < resultMinAry.length; j++) {
      var tmpBonus = eval(resultMinAry[j].join('*'));
      minBonus += oddsMNLimit(tmpBonus, resultAry[j].length);
    }
  }
  return {
    maxBonus: Math.round(maxBonus * 100) / 100,
    minBonus: Math.round(minBonus * 100) / 100,
    mnCount: mnCount,
  };
}
function commafy(num) {
  /*
    num = num + "";
    var re = /(-?\d+)(\d{3})/
    while (re.test(num)) {
        num = num.replace(re, "$1,$2")
    }
    */
  /*
    if (num.indexOf('.') < 0) {
        num = num+".00";
    }else{
        var tmp = num.split(".");
        if(tmp[1].length ==1){
            num = num +"0";
        }
    	
    }
    */
  return num;
}
function closeOverlay() {
  $('#dialog_print').dialog('close');
}
function updateLeftSel() {
  $('div.leftPan:eq(' + curGameIndex + ') span.oddsPanSel').removeClass('oddsPanSel');
  for (var i = 0; i < selectedAry.length; i++) {
    var id = selectedAry[i].id;
    var obj = $('#' + id);
    if (id.split('_')[2] > 1 && (obj.html() == '' || obj.html == '<TBODY></TBODY>')) {
      initOddsPan(poolNameAry[curGameIndex][Number(id.split('_')[2])].nameCode + 'Odds', Number(id.split('_')[1]), true);
    }
    obj.closest('.portlet').show();
    var oddsAry = selectedAry[i].oddsAry;
    for (var j = 0; j < oddsAry.length; j++) {
      if (curGameIndex == 0) {
        if (id.split('_')[2] < 2) {
          obj.find('.oddsPan').children().eq(Number(oddsAry[j].tdIndex)).addClass('oddsPanSel');
        } else {
          obj.show();
          obj.closest('.portlet-content').show();
          obj.find('tr').eq(oddsAry[j].trIndex).find('td').eq(Number(oddsAry[j].tdIndex)).find('span').addClass('oddsPanSel');
        }
      } else if (curGameIndex == 1) {
        if (id.split('_')[2] < 3) {
          obj
            .find('td')
            .eq(Number(oddsAry[j].trIndex) + 3)
            .children()
            .eq(Number(oddsAry[j].tdIndex))
            .addClass('oddsPanSel');
        } else {
          obj.show();
          obj.closest('.portlet-content').show();
          obj.find('tr').eq(oddsAry[j].trIndex).find('td').eq(Number(oddsAry[j].tdIndex)).find('span').addClass('oddsPanSel');
        }
      }
    }
  }
}
function updateMNAndTimes(value) {
  //过关选项和倍数
  var tmpAry = value.split(' ');
  var index1 = tmpAry[1].indexOf('(');
  var mnStr = tmpAry[1].substring(0, index1);
  var index2 = tmpAry[1].indexOf('倍');
  var timesStr = tmpAry[1].substring(index1 + 1, index2);
  times = Number(timesStr);
  var ary = optionAry[selectedAry.length];
  for (var i = 0; i < ary.length; i++) {
    if (ary[i][0] == mnStr) {
      mnIndex = i;
      $('#optionPan').find('input').eq(i).prop('checked', true);
      break;
    }
  }
  //$("#multiSlider").slider("value", times);
  $('#amount').val(times + '倍');
  calculate();
}
function oddsMNLimit(bonus, len) {
  bonus = rundFunc(bonus * 2, 1);

  //奖金限制
  switch (len) {
    case 2:
    case 3:
      if (bonus > 200000) bonus = 200000;
      break;
    case 4:
    case 5:
      if (bonus > 500000) bonus = 500000;
      break;
    case 6:
    case 7:
    case 8:
      if (bonus > 1000000) bonus = 1000000;
      break;
  }
  return Math.round(bonus * times * 100) / 100;
}
/*四舍六入五成双*/
function rundFunc(data, m) {
  var dt = data.toFixed(8).toString();
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
  }
  //vals已经是2位小数，使用toFixed(2)使之补零操作
  return (parseFloat(vals) * m).toFixed(2);
}
function getCombinAryByNum(arr, num) {
  var r = [];
  (function f(t, a, n) {
    if (n == 0) return r.push(t);
    for (var i = 0, l = a.length; i <= l - n; i++) {
      f(t.concat(a[i]), a.slice(i + 1), n - 1);
    }
  })([], arr, num);
  return r;
}

function getSelectedStr() {
  var cookieStr = '';
  for (var i = 0; i < selectedAry.length; i++) {
    cookieStr +=
      '|' +
      selectedAry[i].id +
      '@' +
      selectedAry[i].matchNo +
      '@' +
      selectedAry[i].poolName +
      '@' +
      selectedAry[i].matchVS +
      '@' +
      selectedAry[i].matchTime +
      '@' +
      selectedAry[i].isSingle +
      '@';
    for (var j = 0; j < selectedAry[i].oddsAry.length; j++) {
      cookieStr +=
        '#' + selectedAry[i].oddsAry[j].optionName + ',' + selectedAry[i].oddsAry[j].odds + ',' + selectedAry[i].oddsAry[j].tdIndex + ',' + selectedAry[i].oddsAry[j].trIndex;
    }
  }
  return cookieStr;
}
function setCookie(name, value) {
  var Days = 30; //此 cookie 将被保存 30 天
  var exp = new Date(); //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
function getCookie(name) {
  //取cookies函数
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) return unescape(arr[2]);
  return null;
}
function delCookie(name) {
  //删除cookie
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}
function select_count(len, optionAry) {
  var count = 0;
  var parse2Num = (parse2Num = Math.pow(2, len) - 1);
  for (var m = 0; m < optionAry.length; m++) {
    for (var i = 1; i <= parse2Num; i++) {
      var radix2Str = i.toString(2);
      var addNum = 0;
      for (var j = radix2Str.length - 1; j >= 0; j--) {
        var bitValue = Number(radix2Str.charAt(j));
        addNum += bitValue;
      }
      if (addNum == optionAry[m]) {
        count++;
      }
    }
  }
  return count;
}

function getCombinByIndex(len, optionStr) {
  var parse2Num = Math.pow(2, len) - 1;
  var infoAry = [];
  var tmpAry = [];
  for (var m = 0; m < optionStr.length; m++) {
    for (var i = 1; i <= parse2Num; i++) {
      var radix2Str = i.toString(2);
      var addNum = 0;
      var tmpAry = [];
      for (var j = radix2Str.length - 1; j >= 0; j--) {
        var bitValue = Number(radix2Str.charAt(j));
        addNum += bitValue;
        if (bitValue > 0) {
          var aryIndex = radix2Str.length - 1 - j;
          tmpAry.push(aryIndex);
        }
      }
      if (addNum == Number(optionStr.charAt(m))) {
        infoAry.push(tmpAry);
      }
    }
  }
  return infoAry;
}
function getMNDetail(ary, optionStr) {
  var infoAry = getCombinByIndex(ary.length, optionStr);
  var returnAry = [];
  var radix = 32;
  for (var i = 0; i < infoAry.length; i++) {
    var tmpAry = infoAry[i];
    var oddsLenAry = [];
    for (var j = 0; j < tmpAry.length; j++) {
      oddsLenAry.push(ary[tmpAry[j]].oddsAry.length.toString(radix));
    }
    var lenStr = oddsLenAry.join('');
    var startNum = parseInt((Math.pow(2, tmpAry.length) - 1).toString(2), radix);
    var endNum = parseInt(lenStr, radix);
    for (var j = startNum; j <= endNum; j++) {
      var tmpStr = j.toString(radix);
      var isContinue = false;
      for (var m = 0; m < tmpStr.length; m++) {
        if (tmpStr.charAt(m) > lenStr.charAt(m)) {
          isContinue = true;
          var str = tmpStr.substr(0, m);
          for (var n = m; n < tmpStr.length; n++) {
            str += '1';
          }
          num = parseInt(str, radix);
          num += Math.pow(radix, tmpStr.length - m) - 1;
          j = num;
          break;
        }
      }
      if (isContinue) continue;
      returnAry.push([tmpStr, i]);
    }
  }
  return { combinAry: infoAry, indexAry: returnAry };
}
function test() {
  var m = Math.round(rundFunc(fOdds * 2, 1) * times * 100) / 100;
  return m;
}
function viewDetail(count, max, min, mnCount) {
  var optionStr = optionAry[selectedAry.length][mnIndex][1];
  if (parlay == 1) {
    //多选过关
    var checkedIn = $("input[name='ck']:checked");
    optionStr = '';
    for (var i = 0; i < checkedIn.length; i++) {
      optionStr += $(checkedIn[i]).attr('index');
    }
  }
  for (var i = 0; i < optionStr.length; i++) {
    if (optionStr.charAt(i) > count) {
      optionStr = optionStr.substr(0, i);
      break;
    }
  }
  var ary = getMNDetail(selectedAry, optionStr);
  var combinAry = ary.combinAry;
  var indexAry = ary.indexAry;

  var resultStr = '';
  var m = 0;
  for (var i = 0; i < indexAry.length; i++) {
    var oddsIndexStr = indexAry[i][0] + '';
    var aryIndex = indexAry[i][1];
    var fOdds = 1;
    var tmpStr = "<tr  no='##'><td style='width:38px;'>" + ++m + "</td><td  style='width:80px;'>" + oddsIndexStr.length + '串1</td><td>';
    var matchIndexStr = '';
    for (var j = 0; j < oddsIndexStr.length; j++) {
      matchIndexStr += combinAry[aryIndex][j];
      var tmpAry = selectedAry[combinAry[aryIndex][j]];
      var oddsObj = tmpAry.oddsAry[Number(oddsIndexStr.charAt(j)) - 1];
      fOdds *= Number(oddsObj.odds);
      tmpStr += tmpAry.matchNo + '(' + oddsObj.optionName + '@' + oddsObj.odds + ') x ';
    }
    tmpStr = tmpStr.replace('##', matchIndexStr);
    if (aLiner.length > 0) {
      //设胆
      aLiner = aLiner.sort();
      var ln = matchIndexStr.split('').length;
      var matchArr = matchIndexStr.split('');
      if (aLiner.length <= ln) {
        var co = 0;
        for (var k = 0; k < aLiner.length; k++) {
          var ix = $.inArray(aLiner[k].toString(), matchArr);
          if (ix != -1) {
            //包含
            co++;
          }
        }
        if (co == aLiner.length) {
          var m = Math.round(rundFunc(fOdds * 2, 1) * times * 100) / 100;
          resultStr += tmpStr.substr(0, tmpStr.length - 3) + ' x ' + times + "倍</td><td  style='width:60px;'>" + m + '元</td>';
        } else {
          resultStr += '';
          m--;
        }
      } else {
        var com = 0;
        for (var n = 0; n < matchArr.length; n++) {
          var ixm = $.inArray(Number(matchArr[n]), aLiner);
          if (ixm != -1) {
            //包含
            com++;
          }
        }
        if (com == matchArr.length) {
          var m = Math.round(rundFunc(fOdds * 2, 1) * times * 100) / 100;
          resultStr += tmpStr.substr(0, tmpStr.length - 3) + ' x ' + times + "倍</td><td  style='width:60px;'>" + m + '元</td>';
        } else {
          resultStr += '';
          m--;
        }
      }
    } else {
      var m = Math.round(rundFunc(fOdds * 2, 1) * times * 100) / 100;
      resultStr += tmpStr.substr(0, tmpStr.length - 3) + ' x ' + times + "倍</td><td  style='width:60px;'>" + m + '元</td>';
    }
  }
  $('#viewDetailTbl').html(resultStr);
  if (resultStr == '') {
    return;
  } else {
    $('#viewDetailDiv').toggle();
  }
  var e = event || window.event;
  e.stopPropagation();
}
function closeDetail() {
  $('#viewDetailDiv').hide();
}
function EnterPress(obj, e) {
  //传入 event
  var e = e || window.event;
  if (e.keyCode == 13) {
    var curTimes = obj.value.replace(/\D/g, '');
    if (curTimes == '') {
      times = 1;
    } else {
      times = Number(curTimes);
      if (times < 1) {
        times = 1;
      } else if (times > large_times) {
        times = large_times;
      }
    }
    $('#times').val(times);
    calculate();
  }
}
function changeVal(obj) {
  var curTimes = obj.value.replace(/\D/g, '');
  if (curTimes == '') {
    times = 1;
  } else {
    times = Number(curTimes);
    if (times < 1) {
      times = 1;
    } else if (times > large_times) {
      times = large_times;
    }
  }
  $('#times').val(times);
  calculate();
}

$(document).on('click', '.bDateHide', function () {
  //同步到filter面板
  var bIndex = $(this).parent().parent('div').attr('bindex');
  if ($(this).html() == '隐藏') {
    $('.matches_' + bIndex).hide();
    $('hr').css('border-bottom', '0');
    $('.portlet-content').css('padding-bottom', 0);
    $(this).html('显示');
    var obj = $(this).prevAll('img');
    obj.attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/show.png');
  } else {
    $(this).html('隐藏');
    $('.matches_' + bIndex).show();
    var obj = $(this).prevAll('img');
    $('hr').css('border-bottom', 'solid 1px #d9d9d9');
    obj.attr('src', '//static.sporttery.cn/pres/proj/2016/sporttery-wap/images/calculator/hide.png');
  }
});
$(document).ready(function () {
  initSelectPannel();
});
function getPlan() {
  var str = '';
  var poolNum = 0;
  var poolStr = '';
  var count = 0;
  if (selectedAry.length > 0) {
    for (var j = 0; j < selectedAry.length; j++) {
      var selectStr = '';
      var selObj = selectedAry[j];
      var pool = selObj.poolName;
      var tmpAry = selObj.oddsAry;

      for (var i = 0; i < tmpAry.length; i++) {
        selectStr += tmpAry[i].optionName + '(' + tmpAry[i].odds + ')、';
      }
      var s = changeStr(selectStr);
      var vsAry = selObj.matchVS.split('$');
      if (curGameIndex == 0) {
        str += "<li><div class='list_title'>" + selObj.matchNo + ' &nbsp;&nbsp;' + vsAry[0] + ' VS ' + vsAry[2] + "</div><div class='list_result'>" + s;
      } else {
        str += "<li><div class='list_title'>" + selObj.matchNo + ' &nbsp;&nbsp;' + selObj.matchVS + "</div><div class='list_result'>" + s;
      }
      str += '</div></li>';
      count++;
    }
  }
  if (str != '') {
    $('.modal-body').html(str.substr(0, str.length));
  } else {
    $('.modal-body').html('无');
  }

  var selectedStr = '';
  $('#optionList input').each(function (index) {
    if ($('#optionList input:eq(' + index + ')').prop('checked') == true) {
      selectedStr += optionSelectArr[index] + ', ';
    }
  });
  if (selectedStr != '') {
    $('.modal-title').html('过关方式：' + selectedStr.substr(0, selectedStr.length - 2));
  } else {
    $('.modal-title').html('过关方式：无');
  }
}

$('#passSelection').click(function () {
  //隐藏详细信息窗口
  if ($('#keyboard').css('display')) {
    $('#keyboard').css('display', 'none');
    $('.sel_nums').removeClass('boder-red');
    $('#times').css('color', '#f84a4a');
    $('#times').css('background-color', '');
  }
  if ($('#selDetailDiv').css('display')) {
    $('#selDetailDiv').css('display', 'none');
    $('#selDetailBtn').removeClass('boder-red');
  }

  if ($('#selDetailBtn').hasClass('detailBtnClk')) {
    $('#selDetailBtn').removeClass('detailBtnClk');
    if (typeof slider == 'object') {
      slider.destroySlider();
    }
    $('#selDetailDiv').fadeOut();
  }
  if ($('#allSelect').css('display') == 'none') {
    $('#passSelection').addClass('boder-red');
    $('.showMode').css('display', 'block');
    initSelectPannel();
  } else {
    $('#passSelection').removeClass('boder-red');
    $('.showMode').css('display', 'none');
  }
});
$('#selDetailBtn').click(function () {
  //打开选择详细列表
  if ($('#allSelect').css('display')) {
    $('#allSelect').css('display', 'none');
    $('#passSelection').removeClass('boder-red');
  }
  if ($('#keyboard').css('display')) {
    $('#keyboard').css('display', 'none');
    $('.sel_nums').removeClass('boder-red');
  }
  if ($('#selCount').text() > 0) {
    if (!$(this).hasClass('detailBtnClk')) {
      $('#selDetailDiv').show();
      updateSelDetail();
      if ($('#selCount').text() == 1) {
      } else {
        slider = $('.bxslider').bxSlider({ pager: false });
        slider.reloadSlider();
      }
      $(this).addClass('detailBtnClk');
      $(this).addClass('boder-red');
    } else {
      $(this).removeClass('detailBtnClk');
      $(this).removeClass('boder-red');
      $('#selDetailDiv').hide();
      if (typeof slider == 'object') {
        slider.destroySlider();
      }
    }
  }
});
$(document).on('click', '#selDetailClose', function () {
  //选择详细的×
  $('#selDetailBtn').click();
});
function updateSelDetail() {
  if ($('#selDetailDiv').css('display') == 'none') return;
  var str = '';
  var poolNum = 0;
  var poolStr = '';
  var count = 0;

  if (selectedAry.length > 0) {
    for (var j = 0; j < selectedAry.length; j++) {
      var selectStr = '';
      var selObj = selectedAry[j];
      var pool = selObj.poolName;
      var tmpAry = selObj.oddsAry;

      for (var i = 0; i < tmpAry.length; i++) {
        selectStr += tmpAry[i].optionName + '(' + tmpAry[i].odds + ')、';
      }
      var s = changeStr(selectStr);

      var vsAry = selObj.matchVS.split('$');
      if (curGameIndex == 0) {
        str += "<li><div class='matchTitle'>" + selObj.matchNo + '&nbsp;&nbsp;&nbsp;&nbsp;' + vsAry[0] + ' VS ' + vsAry[2] + "</div><div class='matchSelected'>" + s;
      } else {
        str += "<li><div class='matchTitle'>" + selObj.matchNo + ' &nbsp;&nbsp;' + selObj.matchVS + "</div><div class='matchSelected'>" + s;
      }

      +'</div></li>';
      count++;
    }
  }
  $('#selDetailTbl').html(str);
}
function cleanSelectedStatus() {
  if ($('#allSelect').css('display')) {
    $('#allSelect').css('display', 'none');
    $('#passSelection').removeClass('boder-red');
  }
  if ($('#keyboard').css('display')) {
    $('#keyboard').css('display', 'none');
    $('.sel_nums').removeClass('boder-red');
  }
  if ($('#selDetailDiv').css('display')) {
    $('#selDetailDiv').fadeOut();
    $('#selDetailBtn').removeClass('boder-red');
    $('#selDetailBtn').removeClass('detailBtnClk');
  }
  if (typeof slider == 'object') {
    slider.destroySlider();
  }
}
lotFunc.openKeyboard = function () {
  if ($('#allSelect').css('display')) {
    $('#allSelect').css('display', 'none');
    $('#passSelection').removeClass('boder-red');
  }
  if ($('#selDetailDiv').css('display')) {
    $('#selDetailDiv').css('display', 'none');
    $('#selDetailBtn').removeClass('boder-red');
    $('#selDetailBtn').removeClass('detailBtnClk');
  }
  if ($('#keyboard').css('display') == 'none') {
    $('#initTimes').val('true');
    $('#keyboard').css('display', 'block');
    $('.sel_nums').addClass('boder-red');
    $('#times').css('color', '#FFF');
    $('#times').css('background-color', '#f84a4a');
  } else {
    $('#times').css('color', '#f84a4a');
    $('#times').css('background-color', '');
    $('#keyboard').css('display', 'none');
    $('.sel_nums').removeClass('boder-red');
  }
  if (typeof slider == 'object') {
    slider.destroySlider();
  }
};
lotFunc.clickKeyboard = function (num) {
  var nums = $('#times').text();
  if ($('#initTimes').val() == 'true') {
    $('#initTimes').val('false');
    if (num == 0) {
      nums = 1;
    } else {
      nums = num;
    }
  } else {
    if (nums == '') {
      nums = 1;
    }
    if (nums.length >= 2) {
      alert('投注倍数最高到' + large_times + '倍');
      nums = large_times;
    } else {
      nums = nums + num;
      if (nums > large_times) {
        alert('投注倍数最高到' + large_times + '倍');
        nums = large_times;
      }
    }
  }
  $();
  $('#times').text(nums);
  $('#multiple').text(nums);
};
lotFunc.clickKeyboardDel = function () {
  var nums = $('#times').text();
  if (nums.length == 1) {
    nums = 1;
    $('#initTimes').val('true');
  } else if (nums.length == 2) {
    nums = nums.substr(0, 1);
  }
  $('#times').text(nums);
  $('#multiple').text(nums);
};
lotFunc.clickKeyboardOK = function () {
  $('#keyboard').css('display', 'none');
  $('.sel_nums').removeClass('boder-red');
  times = $('#times').text();
  calculate();
};
function initSelectPannel() {
  var len = $('#optionList input').length;
  if (len > 0) {
    $('#optionList input').each(function (index) {
      if ($('#optionList input:eq(' + index + ')').prop('checked') == true) {
        $('#allSelect .showModes .showModeEvery:eq(' + index + ')').addClass('selectedGuanCss');
        for (var i = len; i < 8; i++) {
          $('#allSelect .showModes .showModeEvery:eq(' + i + ')').css('color', '#999999');
          $('#allSelect .showModes .showModeEvery:eq(' + i + ')').removeClass('selectedGuanCss');
          $('#item_' + i).removeAttr('onclick');
        }
      } else {
        $('#allSelect .showModes .showModeEvery:eq(' + index + ')').css('color', '#666666');
        $('#allSelect .showModes .showModeEvery:eq(' + index + ')').removeClass('selectedGuanCss');
        for (var i = len; i < 8; i++) {
          $('#allSelect .showModes .showModeEvery:eq(' + i + ')').css('color', '#999999');
          $('#allSelect .showModes .showModeEvery:eq(' + i + ')').removeClass('selectedGuanCss');
          $('#item_' + i).removeAttr('onclick');
        }
      }
      $('#item_' + index).attr('onclick', "changeSelectedStauts('" + index + "')");
    });
  } else {
    for (var i = 0; i < 8; i++) {
      $('#allSelect .showModes .showModeEvery:eq(' + i + ')').css('color', '#999999');
      $('#allSelect .showModes .showModeEvery:eq(' + i + ')').removeClass('selectedGuanCss');
      $('#item_' + i).removeAttr('onclick');
    }
  }
}
function changeSelectedStauts(id) {
  if ($('#item_' + id).hasClass('selectedGuanCss') == true) {
    $('#item_' + id).removeClass('selectedGuanCss');
    $('#optionList input:eq(' + id + ')').prop('checked', false);
    $('#allSelect .showModes .showModeEvery:eq(' + id + ')').css('color', '#666666');
  } else {
    $('#item_' + id).addClass('selectedGuanCss');
    $('#optionList input:eq(' + id + ')').prop('checked', true);
  }
  calculate();
}
function updateSelectedGuan() {
  var selectedStr = '';
  $('#optionList input').each(function (index) {
    if ($('#optionList input:eq(' + index + ')').prop('checked') == true) {
      selectedStr += optionSelectArr[index] + ', ';
      $('#allSelect .showModes .showModeEvery:gt(' + index + ')').css('color', '#999999');
    }
  });
  $('#passSelection').empty();
  if (selectedStr != '') {
    if (selectedStr.length > 24) {
      $('#passSelection').css('line-height', '20px');
      $('#passSelection').css('font-size', '12px');
      $('#passSelection').css('padding', '0 9%');
    } else {
      $('#passSelection').css('line-height', '42px');
      $('#passSelection').css('font-size', '14px');
      $('#passSelection').css('padding', '0');
    }
    $('#passSelection').html(selectedStr.substr(0, selectedStr.length - 2));
  } else {
    $('#passSelection').html('过关选择');
  }
}

function getPoolAry(poolName) {
  var poolAry = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var tmpStr = '-';
  for (var i = 0; i < selectedAry.length; i++) {
    tmpStr += selectedAry[i].poolName + '-';
  }

  poolAry[0] = tmpStr.split('-胜平负').length - 1;
  poolAry[1] = tmpStr.split('-让球胜平负').length - 1;
  poolAry[2] = tmpStr.split('-比分').length - 1;
  poolAry[3] = tmpStr.split('-总进球').length - 1;
  poolAry[4] = tmpStr.split('-半全场').length - 1;
  poolAry[5] = tmpStr.split('-胜负').length - 1;
  poolAry[6] = tmpStr.split('-让分胜负').length - 1;
  poolAry[7] = tmpStr.split('-大小分').length - 1;
  poolAry[8] = tmpStr.split('-胜分差').length - 1;

  if (poolName != null) {
    switch (poolName) {
      case '胜平负':
        poolAry[0] += 1;
        break;
      case '让球胜平负':
        poolAry[1] += 1;
        break;
      case '比分':
        poolAry[2] += 1;
        break;
      case '总进球':
        poolAry[3] += 1;
        break;
      case '半全场':
        poolAry[4] += 1;
        break;
      case '胜负':
        poolAry[5] += 1;
        break;
      case '让分胜负':
        poolAry[6] += 1;
        break;
      case '大小分':
        poolAry[7] += 1;
        break;
      case '胜分差':
        poolAry[8] += 1;
        break;
    }
  }

  var totalCount;
  if (curGameIndex == 0) {
    totalCount = poolAry[0] + poolAry[1] + poolAry[2] + poolAry[3] + poolAry[4];
  } else {
    totalCount = poolAry[5] + poolAry[6] + poolAry[7] + poolAry[8];
  }
  return { ary: poolAry, tCount: totalCount };
}

function fadeInF() {
  if ($('#selDetailDiv').css('display') == 'none') return;
  if ($('#selDetailPoolHint').text() == '混合过关') {
    $('#selDetailPoolHint').fadeIn('slow', fadeOutF);
  }
}
function fadeOutF() {
  if ($('#selDetailPoolHint').text() == '混合过关') {
    $('#selDetailPoolHint').fadeOut('slow', fadeInF);
  }
}
function changeStr(str) {
  var n = str.split('、');
  n.pop();
  var newStr = '';
  for (var j = 0; j < n.length; j++) {
    if (j == n.length - 1) {
      newStr += n[j];
    } else {
      newStr += n[j] + '、';
    }
  }
  return newStr;
}
//判断是否超过场次
function checkExceed() {
  if (parlay == 1) {
    //自由过关
    $('#optionTip').html('');
  } else {
    if (curGameIndex == 0) {
      var scor = [];
      var halfall = [];
      var ball = [];
      for (var i = 0; i < selectedAry.length; i++) {
        if (selectedAry[i].poolName == '比分') {
          scor.push(selectedAry[i]);
        }
        if (selectedAry[i].poolName == '总进球') {
          ball.push(selectedAry[i]);
        }
        if (selectedAry[i].poolName == '半全场') {
          halfall.push(selectedAry[i]);
        }
      }
      if (ball.length > 0 && selectedAry.length > 6) {
        //总进球
        //$("#optionTip").html("有<总进球>游戏，超过6场请选择自由过关进行计算");

        isExceed = true;
      }
      if (scor.length > 0 && selectedAry.length > 4) {
        //比分
        //$("#optionTip").html("有<比分或半全场胜平负>游戏，超过4场请选择自由过关进行计算");
        isExceed = true;
      }
      if (halfall.length > 0 && selectedAry.length > 4) {
        //半全场
        //$("#optionTip").html("有<比分或半全场胜平负>游戏，超过4场请选择自由过关进行计算");
        isExceed = true;
      }
      if (!(scor.length > 0 && selectedAry.length > 4) && !(halfall.length > 0 && selectedAry.length > 4) && !(ball.length > 0 && selectedAry.length > 6)) {
        //$("#optionTip").html("");
        isExceed = false;
      }
    } else if (curGameIndex == 1) {
      var earned = [];
      for (var i = 0; i < selectedAry.length; i++) {
        if (selectedAry[i].poolName == '胜分差') {
          earned.push(selectedAry[i]);
        }
      }
      if (earned.length > 0 && selectedAry.length > 4) {
        //胜分差
        $('#optionTip').html('有<胜分差>游戏，超过4场请选择自由过关进行计算！');
        isExceed = true;
      }
      if (!(earned.length > 0 && selectedAry.length > 4)) {
        $('#optionTip').html('');
        isExceed = false;
      }
    }
  }
}
lotFunc.getJsqConfigData = function () {
  // commonV1Fun.ajaxFun(lotFunc.setConfigData, jsCommonDataV1.webApi + '/gateway/report/getVtoolsConfigV1.qry?configKey=vtools:config:zc_app_loty_betshu', undefined, 'get');
  const datas = {
    dataFrom: '',
    emptyFlag: false,
    errorCode: '0',
    errorMessage: '处理成功',
    success: true,
    value: {
      zc_app_loty_betshu: [
        {
          jczq: '1',
          dlt_offline: '1',
          r9: '1',
          cz6cbqcspf_offline_max: '99',
          jczq_max: '50',
          jcmc_offline_max: '50',
          sfc_max: '99',
          qxc_offline_max: '99',
          dlt_offline_max: '99',
          amountInfos: {
            jczq: { amount_limit: '', amount_tips: '' },
            dlt_offline: { amount_limit: '6000', amount_tips: '1000' },
            r9: { amount_limit: '', amount_tips: '' },
            keno80x10_offline: { amount_limit: '6000', amount_tips: '1000' },
            cz4cjq_offline: { amount_limit: '6000', amount_tips: '1000' },
            jsx: { amount_limit: '6000', amount_tips: '1000' },
            jcmc_offline: { amount_limit: '6000', amount_tips: '1000' },
            jclq: { amount_limit: '', amount_tips: '' },
            jclq_offline: { amount_limit: '6000', amount_tips: '1000' },
            qxc_offline: { amount_limit: '6000', amount_tips: '1000' },
            r9_offline: { amount_limit: '6000', amount_tips: '1000' },
            qxc: { amount_limit: '', amount_tips: '' },
            jczq_offline: { amount_limit: '6000', amount_tips: '1000' },
            pl5_offline: { amount_limit: '6000', amount_tips: '1000' },
            sfc_offline: { amount_limit: '6000', amount_tips: '1000' },
            cz4cjq: { amount_limit: '', amount_tips: '' },
            dlt: { amount_limit: '', amount_tips: '' },
            cz6cbqcspf_offline: { amount_limit: '6000', amount_tips: '1000' },
            sfc: { amount_limit: '', amount_tips: '' },
            jsx_offline: { amount_limit: '6000', amount_tips: '1000' },
            pl3: { amount_limit: '', amount_tips: '' },
            pl3_offline: { amount_limit: '6000', amount_tips: '1000' },
            cz6cbqcspf: { amount_limit: '', amount_tips: '' },
            pl5: { amount_limit: '', amount_tips: '' },
            jcmc: { amount_limit: '', amount_tips: '' },
          },
          r9_offline: '1',
          qxc: '1',
          cz6cbqcspf_max: '99',
          jczq_offline: '1',
          pl3_offline_max: '20',
          pl5_offline_max: '99',
          pl5_offline: '1',
          sfc_offline: '1',
          jsx_max: '99',
          cz6cbqcspf_offline: '1',
          sfc_offline_max: '99',
          pl3: '1',
          pl3_offline: '1',
          keno80x10_offline_max: '99',
          pl5: '1',
          jczq_offline_max: '50',
          r9_offline_max: '99',
          jcmc: '1',
          cz4cjq_max: '99',
          pl5_max: '99',
          qxc_max: '99',
          keno80x10_offline: '1',
          cz4cjq_offline: '1',
          jsx: '1',
          jcmc_offline: '1',
          jclq: '1',
          jclq_offline: '1',
          jcmc_max: '99',
          jclq_max: '50',
          qxc_offline: '1',
          dlt_max: '99',
          pl3_max: '99',
          jclq_offline_max: '50',
          cz4cjq: '1',
          dlt: '1',
          sfc: '1',
          r9_max: '99',
          cz4cjq_offline_max: '99',
          cz6cbqcspf: '1',
        },
      ],
    },
  };
  lotFunc.setConfigData(datas);
};
lotFunc.setConfigData = function (data) {
  if (data.errorCode == 0 && JSON.stringify(data.value) != '{}') {
    if (data.value.zc_app_loty_betshu.length > 0) {
      if (curGameIndex == 0) {
        if (data.value.zc_app_loty_betshu[0].jczq_offline_max != '' && data.value.zc_app_loty_betshu[0].jczq_offline_max != undefined) {
          large_times = Number(data.value.zc_app_loty_betshu[0].jczq_offline_max); //最大倍数
        }
        if (
          JSON.stringify(data.value.zc_app_loty_betshu[0].amountInfos) != '{}' &&
          JSON.stringify(data.value.zc_app_loty_betshu[0].amountInfos.jczq_offline != '{}') &&
          data.value.zc_app_loty_betshu[0].amountInfos.jczq_offline.amount_limit != ''
        ) {
          init_money = Number(data.value.zc_app_loty_betshu[0].amountInfos.jczq_offline.amount_limit);
        }
      } else {
        if (data.value.zc_app_loty_betshu[0].jclq_offline_max != '' && data.value.zc_app_loty_betshu[0].jclq_offline_max != undefined) {
          large_times = Number(data.value.zc_app_loty_betshu[0].jclq_offline_max); //最大倍数
        }
        if (
          JSON.stringify(data.value.zc_app_loty_betshu[0].amountInfos) != '{}' &&
          JSON.stringify(data.value.zc_app_loty_betshu[0].amountInfos.jclq_offline != '{}') &&
          data.value.zc_app_loty_betshu[0].amountInfos.jclq_offline.amount_limit != ''
        ) {
          init_money = Number(data.value.zc_app_loty_betshu[0].amountInfos.jclq_offline.amount_limit);
        }
      }
    }
  }
};

function updateSelectLottery(copy = '') {
  copyJc = copy;
}
function showSelectLottery() {
  let copy = copyJc;
  if (!copy) return;
  $('#clearSel').click();
  const games = copy.split('\n');
  let $place = null;
  console.log(games);
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    if (game.length < 6) continue;
    const matchnum = game.substring(0, 5);
    const matchinfo = game.substring(5).trim();
    console.log(matchnum, matchinfo);

    if (curGameIndex == 0) {
      $place = $(`.matchTime:contains(${matchnum})`).closest('table');
      const bqc = matchinfo.match(/[胜平负]{2}\[?\d+(\.\d+)?\]?\s\[?\d+(\.\d+)?\]?/g);
      if (bqc?.length > 0) {
        console.log('bqc', bqc, matchinfo);
        $more = $(`.matchTime:contains(${matchnum})`).closest('table').parent();
        if ($more.find('label.toggle').text() === '更多游戏') {
          $more.find('label.toggle').click();
        }
        bqc.forEach((b) => {
          const q = { 胜: 0, 平: 1, 负: 2 }[b[0]] * 3 + { 胜: 0, 平: 1, 负: 2 }[b[1]];
          $more.next().find(`table:eq(0) td>span:eq(${q})`).click();
        });
        continue;
      }

      const dxs = matchinfo.match(/(\d)球\[?\d+(\.\d+)?\]?\s\[?\d+(\.\d+)?\]?/g);
      if (dxs?.length > 0) {
        console.log('dx', dxs, matchinfo);
        $more = $(`.matchTime:contains(${matchnum})`).closest('table').parent();
        if ($more.find('label.toggle').text() === '更多游戏') {
          $more.find('label.toggle').click();
        }
        dxs.forEach((dx) => {
          const q = +dx[0];
          $more.next().find(`table:eq(1) td>span:eq(${q})`).click();
        });
        continue;
      }

      const sfps = matchinfo.match(/(让)?[胜平负]\s*\[?[+-]?\d+(\.\d+)?\]?\s*\[?\d*(\.\d+)?\]?/g);
      if (sfps?.length >= 0) {
        console.log('sfp', sfps, matchinfo);
        sfps.forEach((sf) => {
          const spf = sf.includes('胜') ? 0 : sf.includes('平') ? 1 : 2;
          const r = game.includes('让') ? 1 : 0;
          $(`.matchTime:contains(${matchnum})`)
            .closest('table')
            .find('td.oddsPan span')
            .eq(spf + r * 3)
            .click();
        });
        continue;
      }
    } else {
      $place = $(`div.portlet-header>table:contains(${matchnum})`);
      const sfps = matchinfo.match(/[大让]?[胜平负]?[+-]?\s*\[?\d+(\.\d+)?\]?\s*\[?\d*(\.\d+)?\]?/g);
      if (sfps?.length >= 0) {
        console.log('sfp', sfps, matchinfo);
        sfps.forEach((sf) => {
          const spf = sf.includes('负') || sf.includes('大') ? 0 : 1;
          const r = game.includes('让') ? 1 : game.includes('大') || game.includes('小') ? 2 : 0;
          $(`div.portlet-header>table:contains(${matchnum})`)
            .find('td.oddsPan span')
            .eq(spf + r * 2)
            .click();
        });
        continue;
      }
    }
    console.log('未匹配', matchinfo);
  }

  if ($place&&$place.length) {
    $(document).scrollTop($place.offset().top - 200);
  }
  setTimeout(() => {
    clickCkfa();
  }, 300);
}
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURIComponent(r[2]);
  return null; //返回参数值
}
