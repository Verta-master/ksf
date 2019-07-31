//Mobile menu
$('.menu__btn').click (function(e) {
  e.stopPropagation();
  $('.menu__list').slideToggle();
  $('menu').toggleClass('menu--opened');
});
