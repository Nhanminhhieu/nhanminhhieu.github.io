$(document).ready(function () {
        var leaf = 5;
        for( var i = 0; i <= 30; i++) {
            var randomImg = 1 + Math.floor(Math.random() * leaf);
            var imgLeaf = "leaves" + randomImg;
            var myImage = $('<img/>');
            myImage.attr('class', "leaves");
            myImage.attr('id', "leaves" + i);
            myImage.attr('src',"img/" + imgLeaf + ".png");
            $(".container").append(myImage);
            animm("#leaves" + i);
        }
    function animm(myImage){
        TweenMax.set($(myImage),{attr:{class:'leaves'},x:R(-1500,1500),y:R(-200,-150),z:R(-200,200)});
        TweenMax.to($(myImage),R(6,15),{y:1000+100,ease:Linear.easeNone,repeat:-1,delay:-15});
        TweenMax.to($(myImage),R(4,8),{x:'+=50',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
        TweenMax.to($(myImage),R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-1});
    };
});
function R(start,end) {
    return Math.random() * (end - start) + start;
};