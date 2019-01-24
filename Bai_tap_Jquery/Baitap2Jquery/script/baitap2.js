$(document).ready(function () {
    var product = 0;
    var item = $(".js-item").length;
    //when btnleft click
    $(".container__btn-left").click(function () {
        product--;
        if(product < 0)
            product = item - 1;
        moveItem(product);
        selectedItem(product);
        slideShow();
        timeOut(".container__btn-left");
    });
    //when btnright click
    $(".container__btn-right").click(function () {
        moveRight();
        slideShow();
        timeOut(".container__btn-right");
    });
    function moveRight() {
        product++;
        if(product >= item)
            product = 0;
        moveItem(product);
        selectedItem(product);
    }
    //when item product click
    $(".js-item").click(function () {
        var index = $(".js-item").index($(this));
        product = index;
        moveItem(index);
        selectedItem(index);
        slideShow();
    });
    selectedItem(product);
    var timer;
    //loop ultil 5s change product
    timer = setInterval(moveRight,5000);
    alert(setInterval());
    function slideShow() {
        clearInterval(timer);
        timer = setInterval(moveRight,5000);
    }
});
//when chang product item change
function selectedItem(product) {
    var itemtProduct = $(".js-item");
    itemtProduct[product].style.opacity = "0.5";
    for(var i = 0; i < itemtProduct.length; i++) {
        if(i != product)
            itemtProduct[i].style.opacity = "1";
    }
}
//change positon ul list product
function moveItem(indexItem) {
    var position = indexItem * 750;
    $(".js-list-product").animate({left: -position})
}
//prevent many clicks
function timeOut(myID) {
    $(myID).css({pointerEvents: "none"})
    setTimeout( function(){
        $(myID).css({pointerEvents: "auto"})
    }, 500);
}