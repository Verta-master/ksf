//Accordion
$('.faq__question').click(function() {
  $(this).next().slideDown();
  $(this).parent().addClass('faq__item--open');
  $('.faq__question').not(this).parent().removeClass('faq__item--open');
  $('.faq__question').not(this).next().stop(true,true).slideUp();
});
