$(document).ready(function() {
    $("#walrus .clickable").click(function() {
        $("#walrus .image-showing").toggle();
        $("#walrus .image-hidden").toggle();
    });

    $("#alien .clickable").click(function() {
        $("#alien .image-showing").toggle();
        $("#alien .image-hidden").toggle();
    });

    $("#batman .clickable").click(function() {
        $("#batman .image-hidden").toggle();
        $("#batman .image-showing").toggle();
    });

    $("#halo .clickable").click(function() {
        $("#halo .image-hidden").toggle();
        $("#halo .image-showing").toggle();
    });

    $("#stormtrooper .clickable").click(function() {
        $("#stormtrooper .image-hidden").toggle();
        $("#stormtrooper .image-showing").toggle();
    });

});
