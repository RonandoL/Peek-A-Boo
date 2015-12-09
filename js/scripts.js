$(document).ready(function() {
    $("#walrus .clickable").click(function() {
        $("#walrus .image-showing").fadeToggle(1500);
        $("#walrus .image-hidden").fadeToggle();
    });

    $("#alien .clickable").click(function() {
        $("#alien .image-showing").slideToggle(700);
        $("#alien .image-hidden").slideToggle();
    });

    $("#batman .clickable").click(function() {
        $("#batman .image-hidden").slideToggle(200);
        $("#batman .image-showing").slideToggle();
    });

    $("#halo .clickable").click(function() {
        $("#halo .image-hidden").slideToggle();
        $("#halo .image-showing").slideToggle();
    });

    $("#stormtrooper .clickable").click(function() {
        $("#stormtrooper .image-hidden").toggle();
        $("#stormtrooper .image-showing").toggle();
    });

});
