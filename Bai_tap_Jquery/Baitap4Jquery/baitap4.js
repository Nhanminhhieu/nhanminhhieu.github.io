$(document).ready(function () {
    $( ".container__background" ).mousemove(function( event ) {
        $(".container__background1 img").css({"left": event.pageX/90+200});
    });
});