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
