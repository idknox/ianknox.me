$(document).ready(function () {

  $('.projects-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.projects').find('.header').offset().top
    }, 500);
  });

  $('.github-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.github').offset().top
    }, 500);
  });


  $('.content').hide();
  $('.close-button').hide();

  function closeBox(el) {
    el.slideUp();
    el.siblings('.header').find('.close-button').hide();
    el.siblings('.header').find('.open-button').show();
  }

  function openBox(el) {
    el.slideDown();
    el.siblings('.header').find('.close-button').show();
    el.siblings('.header').find('.open-button').hide();
  }

  function isHidden(el) {
    var display = el.css('display');
    return (display === 'none')
  }

  $('.header').click(function () {

    if (isHidden($(this).siblings('.content'))) {
      openBox($(this).siblings('.content'));
      closeBox($(this).parent().siblings('section').find('.content'));
    } else {
      closeBox($(this).siblings('.content'));
    }
  });

});