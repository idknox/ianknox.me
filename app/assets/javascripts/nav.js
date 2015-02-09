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
});