$(document).ready(function () {
    $(".content").hide();
    var oldIndexClicked = "";
    //when img click change img hover, this id slideup
    $(".about").click( function(){
        var idClicked = $(".about").index($(this)) + 1;
        $(".about").eq(idClicked - 1).attr("src","images/about" + idClicked + "_mb_hover.jpg");
         $(this).next().slideToggle();
        //close tagIndex old
        if(oldIndexClicked != idClicked && oldIndexClicked !="") {
           $(".about").eq(oldIndexClicked - 1).attr("src", "images/about" + oldIndexClicked + "_mb.jpg");
            $(".about").eq(oldIndexClicked - 1).next().hide();
        }
        //change Img when index equal
        if(oldIndexClicked == idClicked) {
            $(".about").eq(idClicked - 1).attr("src", "images/about" + idClicked + "_mb.jpg");
            oldIndexClicked = "";
            return;
        }
        timeOut(idClicked - 1);
    oldIndexClicked = idClicked;
    });
     aboutInfo();
});
//when click show info
function aboutInfo() {
    $(".content__img").click(function () {
        $(".about").css({pointerEvents: "none"})
        $("#common__product").animate({top: "70px"});
    });
    $(".common__product__img--close").click(function () {
        $("#common__product").animate({top: "-500px"});
        $(".about").css({pointerEvents: "auto"})
    });
}
//when click disable click and after able click,
function timeOut(idClicked) {
    $(".about").eq(idClicked).css({pointerEvents: "none"})
    setTimeout( function(){
        $(".about").eq(idClicked).css({pointerEvents: "auto"})
    }, 500);
}
