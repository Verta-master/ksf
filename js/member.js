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
var initHeight = $('.recommend__deco').innerHeight();
console.log('init: ', initHeight);

$('.recommend__link').click(function() {
  $('.recommend__item:nth-child(n + 4)').slideDown();
  $(this).hide();
  
  setTimeout(function() {
    var realHeight = $('.recommend--member').innerHeight();
    var blockNumber = Math.ceil(realHeight / 138);
    var newHeight = blockNumber  * 138;
    var paddingValue = newHeight - initHeight + 47;
    $('.recommend__deco').css('padding-bottom', paddingValue);
   }, 500);
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

$(window).scroll(movePill);

function movePill() {
  try {
    var pillOffset = $('.pill__img').offset().top - 600;
    var pillOffsetStop = pillOffset + $('.pill__img').height() + 144;

    if ($(this).scrollTop() >= pillOffset && $(this).scrollTop() <= pillOffsetStop) {
      var transZ = 100 - ($(this).scrollTop() - pillOffset) * 0.09;
      if ($(this).scrollTop() - pillOffset > 550 && $(this).scrollTop() - pillOffset < 760) {
        transZ = 100 - ($(this).scrollTop() - pillOffset) * 0.05;
      }
      $('.pill__tablet').css({
        "transform": "translateY(" + ($(this).scrollTop() - pillOffset) + "px)"
        + "translateZ(" + transZ + "px)"
      })
    }
  } catch (error) {}
}
