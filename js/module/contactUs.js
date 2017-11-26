/**
 * Created by BonCzech on 2017/11/14.
 */
//姓名和电话的正则匹配
var oSubmit=document.getElementById("submit");
var oSection=document.getElementsByClassName("section")[0];
var oTest=oSection.getElementsByTagName("input");
var oTextarea=oSection.getElementsByTagName("textarea")[0];
oSubmit.onclick=function(){
    var name=oTest[0].value;
    var email=oTest[1].value;
    var phone=oTest[2].value;
    var re_name=/^([\u4e00-\u9fa5]+|([a-z|A-Z]+\s?)+)$/;
    var re_email=/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
    var re_phone=/([1-9]{1}\d{10})/g;
    if(!(re_name.test(name))){
        alert("输入姓名不正确");
    }
    else if(!(re_email.test(email))){
        alert("输入邮箱不正确");
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
        oTest[2].value="";
        $("textarea").eq(1).val("");
    }
}
//下划线效果
$(".nav li").on("mouseover",function(){
    $(".underline").stop(true,true);
    $(".underline").animate({"left":($(this).index()-1)*109+"px"},400,"linear");
});
