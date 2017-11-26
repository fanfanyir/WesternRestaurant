/**
 * Created by BonCzech on 2017/11/14.
 */

$.ajax({
    type :"GET",
    async : true,
    url : " http://www.easy-mock.com/mock/5a18e0754a055229cab8995c/example_1511579765289",
    dataType : "json",
    //data : {isBanner:true,pageSize:5},
    success:function(data){
        $("#Food_content").html(template("Food_content_c",data));
        $("#Blog_content_box").html(template("Blog_content_c",data));
        $("#commit_intro_left_banner").html(template("commit_intro_left_banner_content",data));
        $("#commit_intro_left_footer1").html(template("commit_intro_left_footer1_m",data));
        $("#commit_intro_left_footer2").html(template("commit_intro_left_footer2_m",data));
        $("#linian_left").html(template("linian_left_c",data));
        $("#linian_content").html(template("linian_content_c",data));
        $("#linian_right").html(template("linian_right_c",data));
        // $("#Blog_content_box .Blog_content_div").eq(0).css("display","block");
        //Blog的点击内容效果变化
        var i=0;
        $("#Blog_right").click(function () {
            if(i>2){
                i=2;
            }
            if(i<0){
                i=0;
            }
            i++;
            $("#Blog_content_box").children(".Blog_content_div").eq(i).css("display","block").siblings().css("display","none");
        });
        $("#Blog_left").click(function () {
            if(i>2){
                i=2;
            }
            i--;
            if(i<0){
                i=0;
            }
            $("#Blog_content_box").children(".Blog_content_div").eq(i).css("display","block").siblings().css("display","none");
        });


        $("#Blog_content_box").children(".Blog_content_div").eq(0).css("display","block");
        //菜品移入凸显效果
        $("#Food_content").children("div").mouseover(function (){
            $(this).children("img").velocity({"scaleX":"1.2","scaleY":"1.2"},600);
            $(this).siblings().css("opacity","0.7");
        }).mouseout(function(){
            $(this).children("img").velocity({"scaleX":"1","scaleY":"1"},400);
            $(this).siblings($(this)).css({"color":"white","opacity":"1"});
        });
        $("#linian>div").mouseover(function(){
            $(this).siblings().css("opacity","0.5");
        }).mouseout(function(){
            $(this).siblings().css("opacity","1");
        })
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }

})
//banner 轮播特效
$("#nav").html($("#nav").html()+$("#nav").html()).css("width",$(".nav_li").outerWidth()*$(".nav_li").length+"px");
var i = 0;
$("#banner").children("span").eq(1).css({"backgroundColor":"blue"});
for(var i=0;i<$(".nav_li").length/2;i++)
{
    var oSpan=document.createElement("span");
    $("#banner").append(oSpan);
}
function toL(){
    if(i==$(".nav_li").length/2){
        i = 0;
        $("#nav").css("left",0);
    }
    if(i==$(".nav_li").length/2-1){
        $("#banner").children("span").css({"backgroundColor":"aliceblue"}).eq(0).css({"backgroundColor":"blue"});
    }
    else
        $("#banner").children("span").css({"backgroundColor":"aliceblue"}).eq(i+1).css({"backgroundColor":"blue"});
    i++;
    $("#nav").animate({"left":-i*$(".nav_li").outerWidth()+"px"},500,"linear");

}
function toR(){
    if(i==0) {
        i = $(".nav_li").length / 2;
        $("#nav").css("left",-i * $(".nav_li").outerWidth() + "px");
    }
    i--;
    $("#nav").animate({"left":-i*$(".nav_li").outerWidth()+"px"},500,"linear");

    $("#banner").children("span").css({"backgroundColor":"aliceblue"}).eq(i).css({"backgroundColor":"blue"});


}
$("input").eq(0).on("click",function(){
    $("#nav").stop(true,true);
    toR();
});
$("input").eq(1).on("click",function(){
    $("#nav").stop(true,true);
    toL();
});
var timer = setInterval(toL,3000);
$("#banner").on({"mouseover":function (){
    clearInterval(timer);
},"mouseout":function (){
    clearInterval(timer);
    timer = setInterval(toL,3000);
}})

$("#banner").children("span").click(function(){
    $("#nav").css("left",(-$(this).index()-1)*$(".nav_li").outerWidth()+"px");
    $("#banner").children("span").css("backgroundColor","aliceblue").eq($(this).index()-3).css("backgroundColor","blue");
})


$("#scolltop").click(function(){
    $(window).scrollTop(0);
})

// $("#Food_content_0").html($("#Food_content_0").html()+$("#Food_content_0").html()+$("#Food_content_0").html()).css("width",$(".Food_content_mid").outerWidth()*$(".Food_content_mid").length+"px");
// var j=0;
// function toR1(){
//     if(j==$(".Food_content_mid").length/2-1){
//         j = 0;
//         $("#Food_content_0").css("left",0);
//     }
//         j++;
//         $("#Food_content_0").animate({"left":-j*($(".Food_content_mid").outerWidth()+15)+"px"},500,"linear");
//
//
//
// }
// function toL1(){
//     if(j==0) {
//         j = $(".Food_content_mid").length / 2;
//         $("#Food_content_0").css("left",-j * $(".Food_content_mid").outerWidth() + "px");
//     }
//     j--;
//     $("#Food_content_0").animate({"left":-j*$(".Food_content_mid").outerWidth()+"px"},500,"linear");
//
//
//
// }
//
// $("#Food_input_right").click(function(){
//         $("#Food_content_0").stop(true,true);
//         toR1();
// })
// $("#Food_input_left").click(function(){
//     $("#Food_content_0").stop(true,true);
//     toL1();
// })





////Team的向下轮播效果
$("#team_content_main").html($("#team_content_main").html()+$("#team_content_main").html()+$("#team_content_main").html()+$("#team_content_main").html()).css("height",$(".team_content_div").outerHeight()*$(".team_content_div").length+"px");
var y = 0;
function toT(){
    if(y==$(".team_content_div").length/2){
        y = 0;
        $("#team_content_main").css("top",0);
    }
    if(y==$(".team_content_div").length/2){
        $("#team_content").children("li").css({"backgroundColor":"aliceblue"}).eq(0).css({"backgroundColor":"#000"});
        $(".team_content_div").css({"backgroundColor":"#212121"}).eq(0).css({"backgroundColor":"#4e4e4e"})
    }
    else
        $("#team_content").children("li").css({"backgroundColor":"aliceblue"}).eq(y+1).css({"backgroundColor":"#000"});
    $(".team_content_div").css({"backgroundColor":"#212121"}).eq(y+1).css({"backgroundColor":"#4e4e4e"})

    y++;
    $("#team_content_main").velocity({"top":-y*(($(".team_content_div").outerHeight())+20)+"px"},350,"linear");

}
// function toB() {
//     if (y == 0) {
//         y = $(".team_content_div").length / 2;
//         $("#team_content_main").css("top", -y * $(".team_content_div").outerHeight() + "px");
//     }
//     y--;
//     $("#team_content_main").animate({"top": -y * $(".team_content_div").outerHeight() + "px"}, 500, "linear");
//
//     $("#team_content").children("li").css({"backgroundColor": "aliceblue"}).eq(y).css({"backgroundColor": "blue"});
//
//
// }
var timer1 = setInterval(toT,3000);
$("#team_content").on({"mouseover":function (){
    clearInterval(timer1);
},"mouseout":function (){
    clearInterval(timer1);
    timer1 = setInterval(toT,3000);
}})

$(".team_content_div").on({"mouseover":function(){
    clearInterval(timer1);
    if(y==$(".team_content_div").length/2){
        $(".team_content_div").css({"backgroundColor":"#212121"}).eq(0).css({"backgroundColor":"#4e4e4e"})
    }
    else
        $(".team_content_div").css({"backgroundColor":"#212121"}).eq(y).css({"backgroundColor":"#4e4e4e"})
},"mouseout":function(){
    $(".team_content_div").css({"backgroundColor":"#212121"})
    clearInterval(timer1);
    timer1 = setInterval(toT,3000);
}})
//联系我们正则匹配
$("#commit_intro_right_bootom").click(function(){
    var nameval = $("#commit_intro_right_input1 ").val();
    var emailval=$("#commit_intro_right_input2").val();
    var phoneval = $("#commit_intro_right_input3 ").val();
    var rename = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
    var reemail=/w+@([0-9a-zA-Z]+[-0-9a-zA-Z]*)(\.[0-9a-zA-Z]+[-0-9aA-Z]*)+/;
    var rephone = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!(rename.test(nameval))){
        alert("输入姓名不正确，请重新输入！");
    }else if(!(rephone.test(phoneval))){
        alert("输入电话不正确，请重新输入！");
    }
    else if(!(reemail.test(emailval))){
        alert("邮箱格式输入错误，请重新输入！")
    }
    else{
        $("#commit_intro_right_input1 ").val("");
        $("#commit_intro_right_input2").val("");
        $("#commit_intro_right_input3").val("");
        alert("提交成功！");
    }
})

//footer的正则匹配
$(".footer_right_btn").click(function(){
    var nameval = $("#footer_right div").children("input").eq(0).val();
    var phoneval = $("#footer_right div").children("input").eq(1).val();
    var rename = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
    var rephone = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!(rename.test(nameval))){
        alert("输入姓名不正确，请重新输入！");
    }else if(!(rephone.test(phoneval))){
        alert("输入电话不正确，请重新输入！");
    }else{
        $("#footer_right div").children("input").val("");
        $("#footer_right").children("textarea").val("");
        alert("提交成功！");
    }
});



