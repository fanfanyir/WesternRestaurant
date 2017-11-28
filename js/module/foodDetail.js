/**
 * Created by BonCzech on 2017/11/14.
 */
$.ajax({
    type :"GET",
    async : true,
    url : "http://www.easy-mock.com/mock/5a18e4664a055229cab89e6e/foodComment",
    dataType : "json",
    success:function(food_show){
        $(".sec_right").html(template("foodComment",food_show));
        //移入鼠标，图片亮度提高
        var oSec_right=document.getElementsByClassName("sec_right")[0];
        var aImg=oSec_right.getElementsByTagName("img");
        for(var i=0;i<aImg.length;i++){
            aImg[i].onmouseover=function(){
                for(var j=0;j<aImg.length;j++){
                    aImg[j].className="active";
                }
                this.className="";
            }
        }
        //移入鼠标图片放大
        $(".section").find("img").hover(function(){
            $(this).velocity("stop",true),
                $(this).velocity({"scaleX":"1.2","scaleY":"1.2"},300);
        },function(){
            $(this).velocity({"scaleX":"1","scaleY":"1"},300)
        })
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }
})
$.ajax({
    type :"GET",
    async : true,
    url : "http://www.easy-mock.com/mock/5a18e4664a055229cab89e6e/bannerList",
    dataType : "json",
    success:function(data){
        $("#carousel").html(template("bannerList",data));
        //图片的轮播
        $("#carousel").html($("#carousel").html()+$("#carousel").html()).css("width",$("#carousel img").outerWidth()*$("#carousel img").length+"px");
        var i = 0;
        function toL(){
            if(i==$("#carousel img").length/2){
                i = 0;
                $("#carousel").css("left",0);
            }
            i++;
            $("#carousel").animate({"left":-i*$("#carousel img").outerWidth()-i*84+"px"},500,"linear");
        }
        function toR(){
            if(i==0){
                i = $("#carousel img").length/2;
                $("#carousel").css("left",-i*$("#carousel img").outerWidth()-i*84+"px");
            }
            i--;
            $("#carousel").animate({"left":-i*$("#carousel img").outerWidth()-i*84+"px"},500,"linear");
        }
        var timer = setInterval(toL,2000);
        $("#carousel").children("img").on({"mouseover":function(){
            $("#carousel").children("img").stop(true,true);
            clearInterval(timer);
            $(this).velocity({"scaleX":"1.2","scaleY":"1.2"},500);

        },"mouseout":function(){
            clearInterval(timer);
            $(this).velocity({"scaleX":"1","scaleY":"1"},500);
            timer = setInterval(toL,2000);}
        })
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }
})
//新增评论
var oComment = document.createElement("textarea");
var oSection=document.getElementsByClassName("section")[0];
var oAdd=oSection.getElementsByTagName("input")[0];
oSection.appendChild(oComment);
oAdd.onclick=function(){
    oComment.style.width=1000+"px";
    oComment.innerHTML="添加评论..."
}
oComment.onfocus = function (){
    if(this.value=="添加评论..."){
        this.value = "";
    }
    this.select();
}
oComment.onblur = function (){
    if(!this.value){
        this.value = "添加评论...";
    }
}
//姓名和电话的正则匹配
var oSubmit=document.getElementById("submit");
var oFooter=document.getElementsByClassName("footer")[0];
var oTest=oFooter.getElementsByTagName("input");
var oTextarea=oFooter.getElementsByTagName("textarea")[0];
    oSubmit.onclick=function(){
        var name=oTest[0].value;
        var phone=oTest[1].value;
        var re_name=/^([\u4e00-\u9fa5]+|([a-z|A-Z]+\s?)+)$/;
        var re_phone=/([1-9]{1}\d{10})/g;
        if(!(re_name.test(name))){
            alert("输入姓名不正确");
        }
        else if(!(re_phone.test(phone))){
            alert("输入电话不正确");
        }
        else if(oTextarea.value=""){
            alert("请输入建议，谢谢您！");
        }
        else{
            oTest[0].value="";
            oTest[1].value="";
            $("textarea").eq(1).val("");
        }
    }
//点击回到顶部
var bOn = true;
window.onscroll=function(){
    if($(window).scrollTop()>200){
        if(bOn){$("#footer_scroll").animate({"bottom":"50px"},400,"linear");bOn=false;}

    }else{
        if(!bOn){
            $("#footer_scroll").animate({"bottom":"-50px"},400,"linear");
            bOn = true;
        }
    }
}
/*window.onscroll=function(){
    if($(window).scrollTop()>200){
        $('#foorer_scroll').fadeIn();
    }else{
        $('#foorer_scroll').fadeOut();
    }
}*/
$("#footer_scroll").on("click",function(){
    $('body,html').animate({
        scrollTop: 0
    }, 600);
})
//二维码的显示和隐藏
$(".footer #information img").on("mouseover",function () {
    //$(".way img").css("zIndex","5");
    $(".corver").css("display","block");
    $(".footer .contast_code img").eq($(this).index()).css("display","block").siblings().css("display","none");
});
$(document).on("click",function () {
    $(".footer .contast_code img").css("display","none");
    $(".corver").css("display","none");
})
//下划线效果
$(".nav li").on("mouseover",function(){
    $(".underline").stop(true,true);
    $(".underline").animate({"left":($(this).index()-1)*109+"px"},400,"linear");
});


/*var data = {
        leader['首页','最新菜单','菜品欣赏','关于我们','联系我们','在线订座']};
 var html = template('test', data);
document.getElementsByClassName("header")[0].innerHTML = html;*/