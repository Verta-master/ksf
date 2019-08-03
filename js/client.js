//Accordion
$('.faq__question').click(function() {
  $(this).next().slideToggle();
  $(this).parent().toggleClass('faq__item--open');
  $('.faq__question').not(this).parent().removeClass('faq__item--open');
  $('.faq__question').not(this).next().stop(true,true).slideUp();
});
