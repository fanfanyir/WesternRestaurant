//footer正则匹配
$.ajax({
    type :"GET",
    async : true,
    url : "http://www.easy-mock.com/mock/5a1684c1b38a3c5b4c7a6cf0/number/cooker",
    dataType : "json",
    success:function(data){
        $("#con_bottom").html(template("m-aboutUs-bot-pic",data));
        //main三张图片凸显
        function m_aboutUsHighlights(obj,way1,way2){

            $(obj).children("div").children("img").on(way1,function(){
                $(obj).siblings().children("div").children("img").css("opacity","0.5");
            });
            $(obj).children("div").children("img").on(way2,function(){
                $(obj).siblings().children("div").children("img").css("opacity","1");
            })
        }
        m_aboutUsHighlights(".m-aboutUs-bot_left","mouseover","mouseout");
        m_aboutUsHighlights(".m-aboutUs-bot_middle","mouseover","mouseout");
        m_aboutUsHighlights(".m-aboutUs-bot_right","mouseover","mouseout");
        $("#m-aboutUs-banner-fixed").html(template("m-aboutUs-banner-fixed-pic",data));
        $(".m-aboutUs-pic").html(template("m-aboutUs-pic-cooker",data));
        $(".con_top").html(template("main_top_left",data));
        //main部分图片移入变大
        $(".m-aboutUs-top_right").children().children("img").on("mouseover",function(){
            $(this).velocity({"scaleX":"1.1","scaleY":"1.1"},1000);
        });
        $(".m-aboutUs-top_right").children().children("img").on("mouseout",function(){
            $(this).velocity({"scaleX":"1","scaleY":"1"},1000);
        });
        $(".con_middle").html(template("con_middle_con",data));
        //数字动态滚动
        var m_aboutUs_timer1 = null;
        var m_aboutUs_begin1 = true;
        var m_aboutUs_timer2 = null;
        var m_aboutUs_timer3 = null;
        $(window).scroll(function(){
            if($(window).scrollTop()>180 && $(window).scrollTop()<1130){
                if(m_aboutUs_begin1){
                    var num1 = 0;
                    var num2 = 0;
                    var num3 = 0;
                    m_aboutUs_timer1 = setInterval(function(){
                        $("#m-aboutUs-since").children("div").children("span").html(num1);
                        num1++;
                        if(num1==904){
                            clearInterval(m_aboutUs_timer1);
                        }
                    },100)
                    m_aboutUs_timer2 = setInterval(function(){
                        $("#m-aboutUs-coffee").children("div").html(num2);
                        num2 += 1000;
                        if(num2==1001000){
                            $("#m-aboutUs-coffee").children("div").html("100,000+");
                            clearInterval(m_aboutUs_timer2);
                        }
                    },100)
                    m_aboutUs_timer3 = setInterval(function(){
                        $("#m-aboutUs-products").children("div").html(num3);
                        num3 ++;
                        if(num3==101){
                            $("#m-aboutUs-products").children("div").html("100+");
                            clearInterval(m_aboutUs_timer3);
                        }
                    },500)
                }
                m_aboutUs_begin1 = false;
            }
        });



    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }
});
$("#m-aboutUs-btn").click(function(){
    var str1 = $("#m-aboutUs-name").children("input").val();
    var str2 = $("#m-aboutUs-phonenum").children("input").val();
    var str3 = $("#m-aboutUs-help").children("textarea").val();

    var re1 = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
    var re2 = /(\d{3,4})(\s|-)?(\d{8})/g;
    var re3 = /[\u4e00-\u9fa5]+/g;
    if(!(re1.test(str1))){
        alert("姓名输入不正确，请重新输入！");
    }else if(!(re2.test(str2))){
        alert("电话输入不正确，请重新输入！");
    }else if(!(re3.test(str3))){
        alert("建议内容输入不正确，可能输入不正确的字符，请重新输入！");
    }else{
        $("#m-aboutUs-name").children("input").val("");
        $("#m-aboutUs-phonenum").children("input").val("");
        $("#m-aboutUs-help").children("textarea").val("");
        alert("提交成功！");
    }
});


//回到顶部
$(window).scroll(function(){
    $("#m-aboutUs-return_top").click(function () {
        $(window).scrollTop(0);
    });
});


//显示二维码
function m_aboutUs_erweima(i,obj1){
    //alert($("#m-aboutUs-contact_pic").children());
    $("#m-aboutUs-contact_pic").children().eq(i).children("img").on("mouseover",function(){
        $("#m-aboutUs-contact_pic").children("img").css({"display":"none"});
        $(obj1).css({"display":"block"});
    })
}
$(document).click(function(){
    $("#m-aboutUs-contact_pic").children("img").css({"display":"none"});
});
m_aboutUs_erweima(0,"#m-aboutUs-qq-code");
m_aboutUs_erweima(1,"#m-aboutUs-wechat-code");
m_aboutUs_erweima(2,"#m-aboutUs-ins-code");
m_aboutUs_erweima(3,"#m-aboutUs-fac-code");
