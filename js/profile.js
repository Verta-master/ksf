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

var reviewsSlider = new Swiper('.review__slider', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 4,
  centeredSlides: true,
  autoHeight: true,
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    stretch: 505,
    depth: 100
  },

  navigation: {
    nextEl: '.review__next',
    prevEl: '.review__prev',
  }
});

//Show more button
$('.project__show').click(function() {
  $('.project__list').slideDown();
  $('.project__btns').hide();
});
