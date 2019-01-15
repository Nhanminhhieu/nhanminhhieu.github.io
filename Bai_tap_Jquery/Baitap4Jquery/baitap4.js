//event move mouse change value css left
$(document).ready(function () {
    $( ".container__background" ).mousemove(function( event ) {
        $(".js-container__background1").css({"left": event.pageX/90+200});
    });
});