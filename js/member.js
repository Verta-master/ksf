function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function cutSeconds(seconds) {
  var seconds = String(seconds);
  if (seconds == "-1") {
    return '0';
  } else {
    return seconds.length == 2 ? seconds.substr(1, 1) : seconds;
  }
}

function initTimer() {
  try {
    var date = $('.timer').attr('data-countdown').split('.').map(function (currentValue) {
      return Number(currentValue);
    });

    var day = date[0];
    var month = date[1] - 1 >= 0 ? date[1] - 1 : date[1];
    var year = date[2]

    //Countdown timer
    var timer = countdown(new Date(year, month, day), function (countdown) {
      $('.hours p').html(countdown.hours);
      $('.minutes p').html(countdown.minutes);

      $('.seconds p.current').html(countdown.seconds);
      $('.seconds p.prev').html(cutSeconds(countdown.seconds + 1));
      $('.seconds p.next').html(cutSeconds(countdown.seconds - 1));
    },
      countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
  } catch (error) { }
}

initTimer();

//Show more buttons
$('.recommend__link').click(function() {
  $('.recommend__item:nth-child(n + 4)').slideDown();
  $(this).hide();
});

//scroll to anchor
$('.btn-scroll').click(function() {
  event.preventDefault();
  var id  = $(this).attr('href');
  var blockHeight = 220;
  if (window.innerWidth < 480) {
    blockHeight = 390;
  }
  var top = $(window).height() - blockHeight;
  $('body, html').animate({
    scrollTop: $('#payment').offset().top - top
  }, 500);
});
