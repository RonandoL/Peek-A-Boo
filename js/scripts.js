$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-hidden").fadeToggle(300);
    $(".initially-showing").fadeToggle(700);
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".bat-hidden").slideToggle();
    $(".bat-showing").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $(".alien-hidden").toggle();
    $(".alien-showing").toggle();
  });
});

$(document).ready(function() {
  $(".clickable4").click(function() {
    $(".stormtrooper-hidden").toggle();
    $(".stormtrooper-showing").toggle();
  });
});

$(document).ready(function() {
  $(".clickable5").click(function() {
    $(".halo-hidden").toggle();
    $(".halo-showing").toggle();
  });
});
