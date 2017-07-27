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

  $("#op-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/op-1.png',
        'title': 'Main Page'
      },
      {
        'href': '/assets/op-2.png',
        'title': 'Search with Autosuggest'
      },
      {
        'href': '/assets/op-3.png',
        'title': 'Mutual Fund Filtering'
      },
      {
        'href': '/assets/op-4.png',
        'title': 'Mutual Fund Detail'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': 0.3
    });
  });

  $("#sift-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/sift-1.png',
        'title': 'Homepage'
      },
      {
        'href': '/assets/sift-2.png',
        'title': 'Profile Page'
      },
      {
        'href': '/assets/sift-3.png',
        'title': 'Image Uploader'
      },
      {
        'href': '/assets/sift-4.png',
        'title': 'Product Detail'
      },
      {
        'href': '/assets/sift-5.png',
        'title': 'Messaging'
      },
      {
        'href': '/assets/sift-6.png',
        'title': 'User Settings'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': 0.3
    });
  });

  $("#cirrus-gallery").click(function () {
    $.fancybox([
      {
        'href': '/assets/cirrus-1.png',
        'title': 'Main Page'
      },
      {
        'href': '/assets/cirrus-2.png',
        'title': 'Product Screenshot'
      },
      {
        'href': '/assets/cirrus-3.png',
        'title': 'Mobile View'
      }
    ], {
      'titlePosition': 'inside',
      'overlayOpacity': 0.3
    });
  });
});