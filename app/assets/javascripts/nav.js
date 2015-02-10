$(document).ready(function () {
  $('#project-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.projects').offset().top
    }, 500);
  });

  if (document.body.scrollTop < window.innerHeight) {
    $('#back-top').hide();
  } else {
    $('#back-top').show();
  }

  $(window).on('scroll', function () {
    if (document.body.scrollTop < window.innerHeight) {
      $('#back-top').hide();
    } else {
      $('#back-top').show();
    }
  });

  $('#back-top').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.top').offset().top
    }, 500);
  });

  $('.content').hide();

  $('.project').on('click', function () {
    if ($(this).width() != $(window).width() * 0.9) {
      $(this).find('.opener').toggle();
      $(this).animate({
        width: ($(window).width() * 0.9)
      }, 500);
      $(this).find('.content').toggle();
      $(this).siblings('.project').animate({
        width: 30
      }, 500)
        .find('.opener').show();
      $(this).siblings('.project').find('.content').hide();
    }
    else {
      $(this).animate({
        width: 30
      }, 500);
      $(this).find('.content').toggle();
      $(this).find('.opener').toggle();
    }
  })
});