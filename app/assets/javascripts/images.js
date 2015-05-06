$(document).ready(function () {

  $("#sl-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/sl-1.png',
        'title': 'Events List'
      },
      {
        'href': '/assets/sl-2.png',
        'title': 'Events Detail'
      },
      {
        'href': '/assets/sl-3.png',
        'title': 'Venues'
      },
      {
        'href': '/assets/sl-4.png',
        'title': 'Venue Events'
      },
      {
        'href': '/assets/sl-5.png',
        'title': 'Venue Map'
      },
      {
        'href': '/assets/sl-5.png',
        'title': 'Events Map'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': '0.3',
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  });

  $("#r-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/r-1.png',
        'title': 'Dashboard'
      },
      {
        'href': '/assets/r-2.png',
        'title': 'View Rant'
      },
      {
        'href': '/assets/r-3.png',
        'title': 'Follow Users'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': 0.3
    });
  });

  $("#nile-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/nile-1.png',
        'title': 'Hero'
      },
      {
        'href': '/assets/nile-2.png',
        'title': 'Team'
      },
      {
        'href': '/assets/nile-3.png',
        'title': 'Footer/Signup'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': 0.3
    });
  });
});