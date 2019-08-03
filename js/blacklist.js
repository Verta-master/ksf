// Blacklist Nav Button
$('.blacklist__nav li a').on('click', function(event) {
  event.preventDefault();
  var filter = $(this).attr('data-filter');

  $('.blacklist__nav li a').removeClass('active');
  $(this).addClass('active');

  $('.blacklist__list li').removeClass('hidden');

  if (filter !== 'all') {
    var regex = new RegExp('\\b\\w*' + filter + '\\w*\\b');
    $('.blacklist__list li').addClass('hidden').filter(function () {
      return regex.test($(this).attr('data-filter'));
    }).removeClass('hidden');
  }
});
