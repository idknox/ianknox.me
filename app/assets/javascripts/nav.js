$(document).ready(function () {
  $('.project-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.projects').offset().top
    }, 500);
  });

  $('.github-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.github').offset().top
    }, 500);
  });

  if (document.body.scrollTop < window.innerHeight) {
    $('#back-top').hide();
    $('#quicklinks').hide();
  } else {
    $('#back-top').show();
    $('#quicklinks').show();
  }

  $(window).on('scroll', function () {
    if (document.body.scrollTop < window.innerHeight) {
      $('#back-top').hide();
      $('#quicklinks').hide();
    } else {
      $('#back-top').show();
      $('#quicklinks').show();

    }
  });

  $('#back-top').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.top').offset().top
    }, 500);
  });

  $('.content').hide();

  $('.project').on('click', function () {
    if ($(this).width() != $(window).width() * 0.8) {
      $(this).find('.opener').toggle();
      $(this).animate({
        width: ($(window).width() * 0.8)
      }, 500);
      $(this).find('.content').toggle();
      $(this).siblings('.project').animate({
        width: 100
      }, 500)
        .find('.opener').show();
      $(this).siblings('.project').find('.content').hide();
    }
    else {
      $(this).animate({
        width: 100
      }, 500);
      $(this).find('.content').toggle();
      $(this).find('.opener').toggle();
    }
  })
});