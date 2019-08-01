function ajaxInit() {
  // Portfolio Nav Button
  $('.portfolio .portfolio__nav li a').on('click', function(event) {
    event.preventDefault();
    var filter = $(this).attr('data-filter');

    $('.portfolio .portfolio__nav li a').removeClass('active');
    $(this).addClass('active');

    $('.portfolio .portfolio__list li').removeClass('hidden');

    if (filter !== 'all') {
      var regex = new RegExp('\\b\\w*' + filter + '\\w*\\b');
      $('.portfolio .portfolio__list li').addClass('hidden').filter(function () {
        return regex.test($(this).attr('data-filter'));
      }).removeClass('hidden');
    }
  });
  
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
}

$(document).ready(function(){
  ajaxInit();
});
