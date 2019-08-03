//Accordion
$('.faq__question').click(function() {
  $(this).next().slideDown();
  $(this).parent().addClass('faq__item--open');
  $('.faq__question').not(this).parent().removeClass('faq__item--open');
  $('.faq__question').not(this).next().stop(true,true).slideUp();
});

//Image rotation
$(window).scroll(rotateHIWCircle);
function rotateHIWCircle() {
  $('.how__img img').css({ "transform": "rotate(" + $(this).scrollTop() * 2 + "deg)" })
};

//Show more buttons
$('.show__btn').click(function() {
  $('.show__item:nth-child(n + 10)').slideDown();
  $(this).hide();
});

$('.recommend__link').click(function() {
  $('.recommend__item:nth-child(n + 4)').slideDown();
  $(this).hide();
});

$('.person__btn').click(function() {
  $('.person__list li:nth-child(n + 3)').slideDown();
  $('.person__list').addClass('person__list--open');
  $('.person__quote').addClass('person__quote--open');
  $('.person__field').addClass('person__field--open');
  $(this).hide();
});

//Mobile show buttons
if (window.innerWidth < 480) {
  $('.show__btn').click(function() {
    $('.show__item:nth-child(n + 4)').slideDown();
    $(this).hide();
  });
}
