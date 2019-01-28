$(document).ready(function () {
    $("#js-check__nhat").click(function () {
        if(this.checked)
            $(".content__comment1").css("visibility","visible");
        else
            $(".content__comment1").css("visibility","hidden");
    })
    $("#js-check__anh").click(function () {
        if(this.checked)
            $(".content__comment2").css("visibility","visible");
        else
            $(".content__comment2").css("visibility","hidden");
    })
    changeStateIcon();
    $(window).resize(function () {
        if ($(document).width() > 1200)
        {
            $(".content3__left").css("display","block");
            $(".content3__right").css("display","block");
        }
        else {
            $(".content3__left").css("display","block");
            $(".content3__right").css("display","none");
        }
    })
})
function changeIcon(myID,myID1) {
    if(myID.attr("src") == "images/pc/icn_male_smile.png") {
        myID.attr("src", "images/pc/icn_male_sad.png");
        myID1.attr("src","images/pc/icn_male_smile.png")
        $(".content3__left").css("display","none");
        $(".content3__right").css("display","block");
    }
    else {
        myID1.attr("src", "images/pc/icn_male_sad.png");
        myID.attr("src", "images/pc/icn_male_smile.png")
        $(".content3__left").css("display","block");
        $(".content3__right").css("display","none");
    }
}
function changeStateIcon() {
    $(".js-male__smile").click(function () {
        changeIcon($(".js-male__smile"),$(".js-male__sad"));

    })
    $(".js-male__sad").click(function () {
        changeIcon($(".js-male__smile"),$(".js-male__sad"));
    })
}