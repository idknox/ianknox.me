$(document).ready(function () {

  function openBox(el) {
    var menuHeight = $('.nav-custom').height();


    el.find('.content').slideDown();
    $('html,body').animate({
      scrollTop: el.offset().top - menuHeight
    }, 500);
    el.siblings('section').find('.content').slideUp()
  }

  function closeBox(el) {
    el.find('.content').slideUp();
    el.siblings('section').find('.content').slideDown()
  }


  // SCROLL //

  $('.projects-button').on('click', function () {
    openBox($('.projects'));
  });

  $('.github-button').on('click', function () {
    openBox($('.github'));
  });

// ACCORDION //
  $('.content').hide();

  function isHidden(el) {
    var display = el.css('display');
    return (display === 'none')
  }


  $('.header-click').click(function () {

    if (isHidden($(this).siblings('.content'))) {
      openBox($(this).parent())
    } else {
      closeBox($(this).parent())
    }

  });

});