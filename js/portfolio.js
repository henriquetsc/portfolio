$(document).ready(function() {
  document.createElement("section");
  $window = $(window);

  $('section[data-type="background"]').each(function(){
    $scroll = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $scroll.data('speed'));

      var coords = '50% ' + yPos + 'px';

      $scroll.css({backgroundPosition: coords});
    });
  });
});
