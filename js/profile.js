//Sliders
var mySwiper = new Swiper ('.certificate__slider1', {
  pagination: {
    el: '.certificate__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.certificate__next',
    prevEl: '.certificate__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 25,
});

var mySwiper = new Swiper ('.certificate__slider2', {
  pagination: {
    el: '.certificate__pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.certificate__next2',
    prevEl: '.certificate__prev2',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 25,
});

var mySwiper = new Swiper ('.project__slider', {
  navigation: {
    nextEl: '.project__next',
    prevEl: '.project__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
});

//Show more button
$('.project__show').click(function() {
  $('.project__list').slideDown();
  $('.project__btns').hide();
});

//Connect button
$('.connect').click(function() {
  $('#call').show();
});

$('.modal__btn').click(function() {
  $('#call').hide();
});

//Review slider
function detect_active() {
  // get active
  var get_active = $("#dp-slider .dp_item:first-child").data("class");
  $("#dp-dots li").removeClass("active");
  $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
}

$("#dp-next").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
  
  detect_active();
});

$("#dp-prev").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
});

$("#dp-dots li").click(function(){
  $("#dp-dots li").removeClass("active");
  $(this).addClass("active");
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
});

var slideHeight = $("#dp-slider .dp_item:first-child").height();

$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
});

var maxHeight = 0;
$("#dp-slider .dp_item").each(function() {
  if ($(this).innerHeight() > maxHeight) {
    maxHeight = $(this).innerHeight();
  }
}).height(maxHeight);