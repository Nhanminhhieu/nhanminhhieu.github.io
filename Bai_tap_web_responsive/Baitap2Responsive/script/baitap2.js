$(document).ready(function () {
   $(window).scroll(function () {
       if($(window).scrollTop() == ($(document).height() - $(window).height())) {
           $("head").append('<link rel="stylesheet" type="text/css" href="css/baitap2_effect.css"/>');
           $("html, body").stop();
           $("html, body").css("overflow","hidden");
           $("html, body").animate({scrollTop:0},5000, function () {
               setTimeout(function () {
                   $("link").eq(1).remove();
                   $("html, body").css("overflow","auto");
               },1500);
           });
       }
})
});
