$(document).ready(function () {
  var menuHeight = $('.nav-custom').height();

  // SCROLL //

  $('.projects-button').on('click', function () {
    $(this).siblings('section').find('.content').slideUp();

    $('html,body').animate({
      scrollTop: $('.projects').offset().top - menuHeight
    }, 500);
    $('.projects').find('.content').slideDown();
  });

  $('.github-button').on('click', function () {
    $(this).siblings('section').find('.content').slideUp();
    $('html,body').animate({
      scrollTop: $('.github').offset().top - menuHeight
    }, 500);
    $('.github').find('.content').slideDown();
  });

// ACCORDION //

  function isHidden(el) {
    var display = el.css('display');
    return (display === 'none')
  }

  $('.content').hide();

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