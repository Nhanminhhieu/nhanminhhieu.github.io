//event move mouse change value css left
$(document).ready(function () {
    $( ".container__background" ).mousemove(function( event ) {
        $(".js-container__background1").css({"left": event.pageX/60+200});
        $(".js-container__background11").css({"left": event.pageX/120+200});
    });
});