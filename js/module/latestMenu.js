/**
 * Created by BonCzech on 2017/11/14.
 */
//点击右下角的小三角回到顶部
$(window).scroll(function(){
    $("#lmenu-trans").click(function () {
        $(window).scrollTop(0);
    });
});
//移入左下角的联系方式图标，显示其二维码
$("#lmenu-footer").children(".top").children(".left").children("span").on("mouseover",function () {
    $("#lmenu-footer").children(".constract-way").children("img").eq($(this).index()-4)
        .css("display","block").siblings().css("display","none");
});
$(document).on("click",function () {
    $("#lmenu-footer").children(".constract-way").children("img").css("display","none");
});

//正则表达式匹配姓名电话和文本建议
var lmenu_name =  /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
var lmenu_phone = /(\d{3,4})(\s|-)?(\d{8})/g;
$("#lmenu-commit").click(function () {
    if(!(lmenu_name.test($("#lmenu-name").val()))){
        alert("姓名匹配不正确！");
    }else if(!(lmenu_phone.test($("#lmenu-phone").val()))){
        alert("电话匹配不正确！");
    }else{
        $("#lmenu-name").val("");
        $("#lmenu-phone").val("");
        alert("提交成功！");
    }
});

//用ajax请求假数据
$.ajax({
    type :"GET",
    url : "http://www.easy-mock.com/mock/5a16ac7c2ce1c03701914abd/lastestMenu/",
    dataType : "json",
    success:function (list) {
        $("#lmenu-section").html(template("sectionList",list));
        console.log(list);
        //移入图片等比放大缩小
        $("#lmenu-img-1").on("mouseover",function () {
            $(this).velocity({"scaleX":1.3,"scaleY":1.3},800);
        }).on("mouseout",function () {
            $(this).velocity({"scaleX":1,"scaleY":1},800);
        });

        $("#lmenu-img-2").on("mouseover",function () {
            $(this).velocity({"scaleX":1.3,"scaleY":1.3},800);
        }).on("mouseout",function () {
            $(this).velocity({"scaleX":1,"scaleY":1},800);
        });

        $("#lmenu-img-3").on("mouseover",function () {
            $(this).velocity({"scaleX":1.3,"scaleY":1.3},800);
        }).on("mouseout",function () {
            $(this).velocity({"scaleX":1,"scaleY":1},800);
        });

        $("#lmenu-img-4").on({"mouseover":function () {
            $(this).velocity({"scaleX":1.3,"scaleY":1.3},800);
        },"mouseout":function () {
            $(this).velocity({"scaleX":1,"scaleY":1},800);
        }});
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + "url" + "】";
        console.log(info);
    }
});