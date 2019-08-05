$(window).on('load', function () {
  var $preloader = $('#preloader'),
      $svg_anm   = $preloader.find('.preloader__img');
  $svg_anm.fadeOut();
  $preloader.delay(1000).fadeOut('slow');
});
