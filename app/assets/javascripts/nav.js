$(document).ready(function () {

  // SCROLL //

  $('.projects-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.projects').find('.header').offset().top
    }, 500);
  });

  $('.github-button').on('click', function () {
    openBox($('.github > .content'))
    $('html,body').animate({
      scrollTop: $('.github').offset().top
    }, 500);
  });

// ACCORDION //

  $('.content').hide();
  var menuHeight = $('.nav-custom').height();

  function isHidden(el) {
    var display = el.css('display');
    return (display === 'none')
  }

  $('.header-click').click(function () {

    if (isHidden($(this).siblings('.content'))) {
      $(this).siblings('.content').slideDown();
      $(this).parents('section').siblings('section').find('.content').slideUp();
      $('html,body').animate({
        scrollTop: $(this).offset().top - menuHeight
      }, 500);
    } else {
      $(this).siblings('.content').slideUp();
    }

  });

});