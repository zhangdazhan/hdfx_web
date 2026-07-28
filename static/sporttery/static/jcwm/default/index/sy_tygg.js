var showQzgg = {
    checkStatus: function() {
        var cookieClose = commonV1Fun.getCookie("noticeCloseM");
        if(cookieClose == "1"){
            $("#jcsym_707").hide();
        }else{
            $("#jcsym_707").show();
        }
    },
    noticeClose: function(){
        commonV1Fun.setCookie("noticeCloseM",1);
        $("#jcsym_707").hide();
    }
}
$(function(){
    showQzgg.checkStatus();
})