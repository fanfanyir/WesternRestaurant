/**
 * Created by BonCzech on 2017/11/14.
 */
$.ajax({
    type :"GET",
    async : true,
    url : "http://www.easy-mock.com/mock/5a1950d24a055229cab9191b/western/",
    dataType : "json",
    success: function (ong) {
        $("#onlineBooking-header").html(template('content', ong));
        $('#nav').children('li').on('mouseover',function () {
            $("#list").stop(true);
            $('#list').animate({'left':$(this).index()*120+'px'},400,'linear');
        });
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)+ " ;textStatus:" + textStatus + "; errorThrown:"+ JSON.stringify(errorThrown) + ";【" + url + "】";
        console.log(info);
    }
});
