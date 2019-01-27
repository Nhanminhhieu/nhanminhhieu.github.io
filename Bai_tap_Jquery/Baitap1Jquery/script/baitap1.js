$(document).ready(function () {
    $(".content").hide();
    var oldIndexClicked = "";
    //when img click change img hover, this id slideup
    $(".js-about").click( function(){
        var idClicked = $(".js-about").index($(this)) + 1;
        $(".js-about").eq(idClicked - 1).attr("src","images/about" + idClicked + "_mb_hover.jpg");
         $(this).next().slideToggle();
        //close tagIndex old
        if(oldIndexClicked != idClicked && oldIndexClicked !="") {
           $(".js-about").eq(oldIndexClicked - 1).attr("src", "images/about" + oldIndexClicked + "_mb.jpg");
            $(".js-about").eq(oldIndexClicked - 1).next().hide();
        }
        //change Img when index equal
        if(oldIndexClicked == idClicked) {
            $(".js-about").eq(idClicked - 1).attr("src", "images/about" + idClicked + "_mb.jpg");
            oldIndexClicked = "";
            return;
        }
        timeOut(idClicked - 1);
    oldIndexClicked = idClicked;
    if (idClicked%2==0)
        aboutInfo1();
    else
        aboutInfo();
    });
});
//when click show info
function aboutInfo() {
    $(".content__img").click(function () {
        $(".js-about").css({pointerEvents: "none"})
        $("#js-common__product").animate({top: "70px"});
    });
    $(".common__product__img--close").click(function () {
        $("#js-common__product").animate({top: "-500px"});
        $(".js-about").css({pointerEvents: "auto"})
    });
}
function aboutInfo1() {
    $(".content__img").click(function () {
        $(".js-about").css({pointerEvents: "none"})
        $("#js-common__product1").animate({top: "70px"});
    });
    $(".common__product__img--close").click(function () {
        $("#js-common__product1").animate({top: "-500px"});
        $(".js-about").css({pointerEvents: "auto"})
    });
}
//when click disable click and after able click,
function timeOut(idClicked) {
    $(".js-about").eq(idClicked).css({pointerEvents: "none"})
    setTimeout( function(){
        $(".js-about").eq(idClicked).css({pointerEvents: "auto"})
    }, 500);
}
