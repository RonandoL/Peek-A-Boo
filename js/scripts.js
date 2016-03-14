$(function() {
  var things = ['walrus', 'alien', 'batman', 'halo', 'stormtrooper'];

  things.forEach(function(thing) {
    var thingy = '#' + thing;
console.log(thingy);
    $(thingy + ' .clickable').click(function() {
      $(thingy + ' .image-showing').fadeToggle(700);
      $(thingy + ' .image-hidden').fadeToggle();
    })
  });

  // Refactored to use .forEach loop
  // $('#walrus .clickable').click(function() {
  //   $('#walrus .image-showing').fadeToggle(700);
  //   $('#walrus .image-hidden').fadeToggle();
  // });
  //
  // $('#alien .clickable').click(function() {
  //   $('#alien .image-showing').slideToggle(700);
  //   $('#alien .image-hidden').slideToggle();
  // });
  //
  // $('#batman .clickable').click(function() {
  //   $('#batman .image-showing').slideToggle();
  //   $('#batman .image-hidden').slideToggle();
  // });
  //
  // $('#halo .clickable').click(function() {
  //   $('#halo .image-showing').slideToggle();
  //   $('#halo .image-hidden').slideToggle();
  // });
  //
  // $('#stormtrooper .clickable').click(function() {
  //   $('#stormtrooper .image-showing').slideToggle();
  //   $('#stormtrooper .image-hidden').slideToggle();
  // });

});
