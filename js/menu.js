//Mobile menu
$('.menu__btn--open').click(function(e) {
  e.stopPropagation();
  $('.menu__list').slideDown();
  $(this).hide();
  $('.menu__btn--close').show();
  $('.logo').addClass('logo--open');
});

$('.menu__btn--close').click(function(e) {
  e.stopPropagation();
  $('.menu__list').slideUp();
  $(this).hide();
  $('.menu__btn--open').show();
  $('.logo').removeClass('logo--open');
});
