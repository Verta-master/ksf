function initTimer() {
  try {
    var date = $('.membership__container .center .timer').attr('data-countdown').split('.').map(function (currentValue) {
      return Number(currentValue);
    });

    var day = date[0];
    var month = date[1] - 1 >= 0 ? date[1] - 1 : date[1];
    var year = date[2]

    //Countdown timer
    var timer = countdown(new Date(year, month, day), function (countdown) {
      $('.pay-block .timer .timer-block.hours p').html(countdown.hours);
      $('.pay-block .timer .timer-block.minutes p').html(countdown.minutes);

      $('.pay-block .timer .timer-block.seconds p.current').html(countdown.seconds);
      $('.pay-block .timer .timer-block.seconds p.prev').html(cutSeconds(countdown.seconds + 1));
      $('.pay-block .timer .timer-block.seconds p.next').html(cutSeconds(countdown.seconds - 1));
    },
      countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
  } catch (error) { }
}

function ajaxInit() {
  initTimer();
  
  //Show more buttons
  $('.recommend__link').click(function() {
    $('.recommend__item:nth-child(n + 4)').slideDown();
    $(this).hide();
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
