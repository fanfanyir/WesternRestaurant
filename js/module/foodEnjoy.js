/**
 * Created by BonCzech on 2017/11/14.
 */
var alineimg = null;
var i = 0;
var j = 0;
var  Enjoy_count = 0;
//点击当前的a,给对应的a添加nowfood类，相应的改变菜品，并给其他清除类名
$('#connet .img').css('display','none').eq(2).css('display','block');

//显示指定菜品
alineimg1 = $(".img").eq(2).children("div").eq(0);
alineimg2 = $(".img").eq(2).children("div").eq(1);
renew();
function renew() {
    $.ajax({
        type :"GET",
        async : true,
        url : "https://easy-mock.com/mock/5a17be8bdc09a2675175fc7b/zyf/",
        dataType : "json",
        success:function(sub){
            $(".snackone_get").html(template("snackone_pass",sub));
            $(".snacktwo_get").html(template("snacktwo_pass",sub));
            $(".noodlesone_get").html(template("noodlesone_pass",sub));
            $(".noodlestwo_get").html(template("noodlestwo_pass",sub));
            $(".steakone_get").html(template("steakone_pass",sub));
            $(".steaktwo_get").html(template("steaktwo_pass",sub));
            $(".soupone_get").html(template("soupone_pass",sub));
            $(".souptwo_get").html(template("souptwo_pass",sub));
            $(".saladone_get").html(template("saladone_pass",sub));
            $(".saladtwo_get").html(template("saladtwo_pass",sub));

            function  addloop(alineimg){
                Enjoy_count = alineimg.children("a").length;
                if(Enjoy_count>4){
                    alineimg.html(alineimg.html() + alineimg.html())
                        .css("width", alineimg.children("a").outerWidth() * alineimg.children("a").length + "px");
                }else {
                    Enjoy_count = 0;
                }
                return Enjoy_count;
            };

            addloop(alineimg1);
            addloop(alineimg2);

            //菜品放大
            $("#connet div div a").hover(function (){
                $("#connet div div a img").css('opacity','0.5');
                $(this).children("div").css('display','block');
                $(this).children("img").velocity({"scaleX":"1.2","scaleY":"1.2"},500).css('opacity','1');
            },function (){
                $("#connet div div a img").css('opacity','1');
                $(this).children("div").css('display','none');
                $(this).children("img").velocity({"scaleX":"1","scaleY":"1"},500).css('opacity','1');
            })
            $("#connet .most").hover(function (){
                $("#connet div div a img").css('opacity','0.5');
                $(this).parent("a").children("img").css('opacity','1');
            })

            $("#nav li").click(function(){
                $('#nav li a').removeClass('nowfood').eq($(this).index()).addClass('nowfood');
                $('#connet .img').css('display','none').eq($(this).index()).css('display','block');
                alineimg1 = $(".img").eq($(this).index()).children("div").eq(0);
                alineimg2 = $(".img").eq($(this).index()).children("div").eq(1);
                i = 0;
                j = 0;
                alineimg1.css("left",0);
                alineimg2.css("left",0);
                addloop(alineimg1);
                addloop(alineimg2);
                //菜品放大
                $("#connet div div a").hover(function (){
                    $("#connet div div a img").css('opacity','0.5');
                    $(this).children("div").css('display','block');
                    $(this).children("img").velocity({"scaleX":"1.2","scaleY":"1.2"},500).css('opacity','1');
                },function (){
                    $("#connet div div a img").css('opacity','1');
                    $(this).children("div").css('display','none');
                    $(this).children("img").velocity({"scaleX":"1","scaleY":"1"},500).css('opacity','1');
                });
                $("#connet .most").hover(function (){
                    $("#connet div div a img").css('opacity','0.5');
                    $(this).parent("a").children("img").css('opacity','1');
                });
            });
        },
            error : function() {
                alert("error!");
            }
        });
}


//轮播
//连接图片
// if($(".imgonep div").length>4){
//     $(".imgonep").html($(".imgonep").html() + $(".imgonep").html())
//         .css("width", $(".imgonep div").outerWidth() * $(".imgonep div").length + "px");
//     $(".nextl").on("click", function () {
//             $(".imgonep div").stop(true,true);
//             toR($(".imgonep"));
//     });
//     $(".nextr").on("click",function () {
//             $("#connet div .imgonep div").stop(true,true);
//             toL($(".imgonep"));
//     });
// };
// if($(".imgtwop div").length>4){
//     $("#connet div .imgtwop").html($("#connet div .imgtwop").html() + $("#connet div .imgtwop").html())
//         .css("width", $("#connet div .imgtwop div").outerWidth() * $("#connet div .imgtwop div").length + "px");
//     $(".nextll").on("click", function () {
//         $("#connet div .imgtwop div").stop(true,true);
//         toR1($(".imgtwop"));
//     });
//     $(".nextrr").on("click",function () {
//         $("#connet div .imgonep div").stop(true,true);
//         toL1($(".imgtwop"));
//     });
// };
//var alineimg = alineimg0.children("div").eq(0);
//var alineimg = $(".img:visible").children("div").eq(0);
//var alineimg1 = $(".img:visible").children("div").eq(1);
//alert(alineimg1.children("div").length);



// var i = 0;
// function  toL() {
//     if(i==($("#connet .imgone1 div").length/2)){
//         i = 0;
//         $("#connet .imgone1").css("left",0);
//     }
//     i++;
//     $("#connet .imgone1").animate({"left":-i*($("#connet .imgone1 div").outerWidth()+10)+"px"},500,"linear");
// }
// function toR(){
//     if(i==0) {
//         i = ($("#connet .imgone1 div").length/2);
//         $("#connet .imgone1").css("left",-i *($("#connet .imgone1 div").outerWidth()+10)+ "px");
//     }
//     i--;
//     $("#connet .imgone1").animate({"left":-i*($("#connet .imgone1 div").outerWidth()+10)+"px"},500,"linear");
// };

// if(alineimg1.children("div").length>4){
//     alineimg1.html($(".img:visible").html() + alineimg1.html())
//         .css("width", alineimg1.children("div").outerWidth() * alineimg1.children("div").length + "px");
//     $(".nextll").on("click", function () {
//         alineimg1.stop(true,true);
//         toR(alineimg1);
//     });
//     $(".nextrr").on("click",function () {
//         alineimg1.stop(true,true);
//         toL(alineimg1);
//     });
// };
//调用轮播

// if($(".img").is(':hidden')){
//     alert($(this).index);
// }
$(".nextl").on("click", function () {
    alineimg1.children("a").stop(true,true);
    toR(alineimg1);
});
$(".nextr").on("click", function () {
    alineimg1.children("a").stop(true,true);
    toL(alineimg1);
});
$(".nextll").on("click", function () {
    alineimg2.children("a").stop(true,true);
    toR1(alineimg2);
});
$(".nextrr").on("click",function () {
    alineimg2.children("a").stop(true,true);
    toL1(alineimg2);
});
//信息确认
$("#give").click(function(){
    var nameval = $(".name").children("input").val();
    var phoneval = $(".telephone").children("input").val();
    var rename = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
    var rephone = /(\d{3,4})(\s|-)?(\d{8})/g;
    if(!(rename.test(nameval))){
        alert("输入姓名不正确，请重新输入！");
    }else if(!(rephone.test(phoneval))){
        alert("输入电话不正确，请重新输入！");
    }else{
        $(".name").children("input").val("");
        $(".telephone").children("input").val("");
        alert("提交成功！");
    }
});
//二维码
$("#call img").on("mouseover",function () {
    $(".contast img").eq($(this).index()).css("display","block").siblings().css("display","none");
});
$(document).on("click",function () {
    $(".contast img").css("display","none");
});



function toL(img_obj){
    if(i == $(img_obj.children("a")).length/2-1){
        i = 0;
        img_obj.css("left",0);
    }
    i++;
    img_obj.animate({"left":-i*($(img_obj.children("a")).outerWidth()+10)+"px"},500,"linear");
    //img_obj.velocity({left: -i*($(img_obj.children("div")).outerWidth()+10)+"px"}, {delay:10,duration :800,easing:[ 500, 50 ]});}
};
function toR(img_obj){
    if(i==0) {
        i = $(img_obj.children("a")).length / 2-1;
        img_obj.css("left",-i *($(img_obj.children("a")).outerWidth()+10)+ "px");
    }
    i--;
    img_obj.animate({"left":-i*($(img_obj.children("a")).outerWidth()+10)+"px"},500,"linear");
};
function toL1(img_obj){
    if(j == $(img_obj.children("a")).length/2-1){
        j = 0;
        img_obj.css("left",0);
    }
    j++;
    img_obj.animate({"left":-j*($(img_obj.children("a")).outerWidth()+10)+"px"},500,"linear");
    //img_obj.velocity({ "left": -i*($(img_obj.children("div")).outerWidth()+10)+"px"}, {delay:10,duration :500,easing:[ 500, 50 ]});
};
function toR1(img_obj){
    if(j==0) {
        j = $(img_obj.children("a")).length / 2-1;
        img_obj.css("left",-j *($(img_obj.children("a")).outerWidth()+10)+ "px");
    }
    j--;
    img_obj.animate({"left":-j*($(img_obj.children("a")).outerWidth()+10)+"px"},500,"linear");
};
