$(document).ready(function() {
  "use strict";

  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeInLeft",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2500,
    complete: function() {
      // Called after the entrance animation is executed.
    }
  });

  //   ==========================================
  //     Function to show About boxes when in view
  //   ==========================================
  (function($) {
    $.fn.visible = function(partial) {
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return compareBottom <= viewBottom && compareTop >= viewTop;
    };
  })(jQuery);

  var win = $(window);

  var allMods = $(".module");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });
  //   =============================================
});
