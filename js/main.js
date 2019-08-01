function Parallax(options) {
  options = options || {};
  this.nameSpaces = {
    wrapper: options.wrapper || '.parallax',
    layers: options.layers || '.parallax-layer',
    deep: options.deep || 'data-parallax-deep'
  };
  this.init = function () {
    var self = this,
      parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
    for (var i = 0; i < parallaxWrappers.length; i++) {
      (function (i) {
        window.addEventListener('mousemove', function (e) {
          var x = e.clientX,
            y = e.clientY,
            layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
          for (var j = 0; j < layers.length; j++) {
            (function (j) {
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                disallow = layers[j].getAttribute('data-parallax-disallow'),
                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
              if (disallow && disallow === 'both') return;
              layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);
          }
        })
      })(i);
    }
  };
  this.init();
  return this;
}

var target = window.location.hash,
  target = target.replace('#', '');

window.location.hash = "";

$(window).on('load', function () {
  if (target) {
    $('html, body').animate({
      scrollTop: $('#' + target).offset().top + 350
    }, 1000);
  }
});

function ajaxInit() {
  new Parallax();
  
  //Accordion
  $('.faq__question').click(function() {
    $(this).next().slideToggle();
    $(this).parent().toggleClass('faq__item--open');
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
  
  //Mobile show buttons
  if (window.innerWidth < 480) {
    $('.show__btn').click(function() {
      $('.show__item:nth-child(n + 4)').slideDown();
      $(this).hide();
    });
  }
}

$(document).ready(function(){
  ajaxInit();
});
