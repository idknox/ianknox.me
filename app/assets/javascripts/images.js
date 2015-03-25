$(document).ready(function () {

  $(".site-image").click(function () {
    $.fancybox([
      {
        'href': '/assets/sl-1.png',
        'title': 'Events List'
      },
      {
        'href': '/assets/sl-2.png',
        'title': 'Events Map'
      },
      {
        'href': '/assets/sl-3.png',
        'title': 'Venues List'
      },
      {
        'href': '/assets/sl-4.png',
        'title': 'Venues Map'
      },
      {
        'href': '/assets/sl-5.png',
        'title': 'Venue Detail'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': '0.3'
    });
  });

});