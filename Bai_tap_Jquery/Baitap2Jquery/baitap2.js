$(document).ready(function () {
    var product = 0;
    var item = $(".item").length;
    $(".container__btn-left").click(function () {
        product--;
        if(product < 0)
            product = item - 1;
        moveItem(product);
        selectedItem(product);
        slideShow();
    });
    $(".container__btn-right").click(function () {
        moveRight();
        slideShow();
    });
    function moveRight() {
        product++;
        if(product >= item)
            product = 0;
        moveItem(product);
        selectedItem(product);
    }
    $(".item").click(function () {
        var index = $(".item").index($(this));
        product = index;
        moveItem(index);
        selectedItem(index);
        slideShow();
    });
    selectedItem(product);
    var timer;
    timer = setInterval(moveRight,5000);
    alert(setInterval());
    function slideShow() {
        clearInterval(timer);
        timer = setInterval(moveRight,5000);
    }
});
function selectedItem(product) {
    var itemtProduct = $(".item");
    itemtProduct[product].style.opacity = "0.5";
    for(var i = 0; i < itemtProduct.length; i++) {
        if(i != product)
        {
            itemtProduct[i].style.opacity = "1";
        }
    }
}
function moveItem(indexItem) {
    var position = indexItem * 750;
    $(".js-list-product").animate({left: -position})
}
