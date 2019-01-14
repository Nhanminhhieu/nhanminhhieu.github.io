$(document).ready(function () {
    $(".content").hide();
    var oldIndexClicked = "";
    $(".about").bind("click", function(){
        var idClicked = "#" + $(this).attr("id");
        $(idClicked).attr("src","images/" +$(this).attr("id")+ "_mb_hover.jpg");
        $(this).next().slideToggle();
        if(oldIndexClicked != idClicked) {
            var cu = oldIndexClicked.substring(1,7);
            $(oldIndexClicked).attr("src", "images/" +cu+ "_mb.jpg");
            $(oldIndexClicked).next().hide();
        }
        if(oldIndexClicked == idClicked) {

            $(idClicked).attr("src", "images/" +$(this).attr("id")+ "_mb.jpg");
            oldIndexClicked = "";
            return;
        }
        timeOut(idClicked);
    oldIndexClicked = idClicked;
        //*****************
        $(".content__img").click(function () {
            $(".about").css({pointerEvents: "none"})
            $("#common__product").animate({top: "70px"});
        });
        $(".common__product__img--close").click(function () {
            $("#common__product").animate({top: "-500px"});
            $(".about").css({pointerEvents: "auto"})
        });
        //******************************
    });
});
function timeOut(idClicked) {
    $(idClicked).css({pointerEvents: "none"})
    setTimeout( function(){
        $(idClicked).css({pointerEvents: "auto"})
    }, 500);
}
