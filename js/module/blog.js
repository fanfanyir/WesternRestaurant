/**
 * Created by BonCzech on 2017/11/14.
 */
$.ajax({
    type :"GET",
    async : true,
    url : "http://www.easy-mock.com/mock/5a1950d24a055229cab9191b/western/blog",
    dataType : "json",
    success: function (ong) {
        $("#blog-content").html(template('contents', ong));
        //导航动画
        $('#nav').children('li').on('mouseover',function () {
            $("#list").stop(true);
            $('#list').animate({'left':$(this).index()*120+'px'},400,'linear');
        });

        //点击返回顶部
        $('#hide').on('click',function () {
            $(window).scrollTop(0);
        });
        //banner图片放大
        $("#banner img").hover(function (){
            $(this).velocity({"scaleX":"1.2","scaleY":"1.2"},1500);
        },function (){
            $(this).velocity({"scaleX":"1","scaleY":"1"},1500);
        });
        //图片轮播
        var i = 0;
        $("#show").html($("#show").html()+$("#show").html()).css("width",1176+'px');
        function toL(){
            if(i==$("#show li").length/2){
                i = 0;
                $("#show").css("left",0);
            }
            i++;
            $("#show").animate({"left": -i * 196 +"px"},500,"linear");
        }
        var timer = setInterval(toL,1500);
        $('#show').on({'mouseover':function () {
            clearInterval(timer);
        },'mouseout': function () {
            timer = setInterval(toL,1500);
        }});
        $('#show li').on({'mouseover':function () {
            $(this).siblings().children('img').css('opacity','0.3');
        },'mouseout':function () {
            $(this).siblings().children('img').css('opacity','1');
        }});
        //点击生成评论
        $('#put').children('input').on('click',function () {
            var mydate = new Date();
            if($('#theme').val() == ''){
                alert('主题不能为空')
            }else if($('#details').val() == ''){
                alert('内容不能为空')
            }else {
                var newLi = $('<li></li>');
                $('<h2></h2>').html($('#theme').val()).appendTo(newLi);
                $('<p class="ids"></p>').html('发布人：哈哈哈').appendTo(newLi);
                $('<p class="ids"></p>').html('发布日期：' + mydate.getFullYear()
                    + '-' + (mydate.getMonth() + 1) + '-' + mydate.getDate()).appendTo(newLi);
                $('<p class="text2"></p>').html($('#details').val()).appendTo(newLi);
                $('<p class="icon"><span class="icon1"><i class="fa fa-thumbs-up"></i>赞(<span class="number1">0</span>)</span><span class="icon2"><i class="fa fa-comments"></i>回复(<span class="number2">0</span>)</span></p>').appendTo(newLi);
                newLi.appendTo('#message');
            }
        });
        //点赞和回复
        $('#message').on('click','li .icon .icon1,li .icon .icon2',function () {
            var classname = $(this).children('i').attr("class");
            $(this).children('i').toggleClass("red");
            if(classname == "fa fa-thumbs-up"||classname == "fa fa-comments") {
                $(this).children('span').html(parseInt($(this).children('span').html()) + 1);
            }else if(classname == "fa fa-thumbs-up red"||classname == "fa fa-comments red"){
                $(this).children('span').html(parseInt($(this).children('span').html()) - 1);
            }
        });
        //信息确认
        $("#give").click(function(){
            var nameval = $("#names").val();
            var phoneval = $("#phone").val();
            var rename = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
            var rephone = /(\d{3,4})(\s|-)?(\d{8})/g;
            if(!(rename.test(nameval))){
                alert("输入姓名不正确，请重新输入！");
            }else if(!(rephone.test(phoneval))){
                alert("输入电话不正确，请重新输入！");
            }else{
                $("#names").val("");
                $("#phone").val("");
                alert("提交成功！");
            }
        });
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }
});
/*//导航动画
$('#nav').children('li').on('mouseover',function () {
    $("#list").stop(true);
    $('#list').animate({'left':$(this).index()*120+'px'},400,'linear');
});

//点击返回顶部
$('#hide').on('click',function () {
    $(window).scrollTop(0);
});

//banner图片放大
$("#banner img").hover(function (){
    $(this).velocity({"scaleX":"1.2","scaleY":"1.2"},1500);
},function (){
    $(this).velocity({"scaleX":"1","scaleY":"1"},1500);
});

//底部图片轮播
var i = 0;
$("#show").html($("#show").html()+$("#show").html()).css("width",1176/!*$("#show li").length*$("#show li").outerWidth()*!/+'px');
function toL(){
    if(i==$("#show li").length/2){
        i = 0;
        $("#show").css("left",0);
    }
    i++;
    $("#show").animate({"left":-i*196/!*$("#show li").outerWidth()+10*!/+"px"},500,"linear");
}
var timer = setInterval(toL,1500);
/!*$('#show').on({'mouseover':function () {
    clearInterval(timer);
    /!*animate.$("#show").stop(true,true);
    $("#show li").hover(function (){
        $("#show li").stop(true);
        $(this).velocity({"scaleX":"1.2","scaleY":"1.2"},300);
    },function (){
        $("#show li").stop(true);
        $(this).velocity({"scaleX":"1","scaleY":"1"},300);
    })*!/
},'mouseout': function () {
    animate.$("#show").stop(true,true);
    clearInterval(timer);
    toL();
    timer = setInterval(toL,1500);
}});*!/

//点击生成评论
$('#put').children('input').on('click',function () {
    var mydate = new Date();
    if($('#theme').val() == ''){
        alert('主题不能为空')
    }else if($('#details').val() == ''){
        alert('内容不能为空')
    }else {
        var newLi = $('<li></li>');
        $('<h2></h2>').html($('#theme').val()).appendTo(newLi);
        $('<p class="ids"></p>').html('发布人：哈哈哈').appendTo(newLi);
        $('<p class="ids"></p>').html('发布日期：' + mydate.getFullYear()
            + '-' + (mydate.getMonth() + 1) + '-' + mydate.getDate()).appendTo(newLi);
        $('<p class="text2"></p>').html($('#details').val()).appendTo(newLi);
        $('<p class="icon"><span class="icon1"><i class="fa fa-thumbs-up"></i>赞(<span class="number1">0</span>)</span><span class="icon2"><i class="fa fa-comments"></i>回复(<span class="number2">0</span>)</span></p>').appendTo(newLi);
        newLi.appendTo('#message');
    }
});

//点赞和回复
$('#message').on('click','li .icon .icon1,li .icon .icon2',function () {
    var classname = $(this).children('i').attr("class");
    $(this).children('i').toggleClass("red");
    if(classname == "fa fa-thumbs-up"||classname == "fa fa-comments") {
        $(this).children('span').html(parseInt($(this).children('span').html()) + 1);
    }else if(classname == "fa fa-thumbs-up red"||classname == "fa fa-comments red"){
        $(this).children('span').html(parseInt($(this).children('span').html()) - 1);
    }
});*/




