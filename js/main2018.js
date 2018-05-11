$(document).ready(function() {
  ("use strict");

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

  //   =============================================
  //        Close Navbar on click LI
  //   =============================================
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
  //   =============================================
  //        Change Nav color on scroll
  //   =============================================
  $(document).scroll(function() {
    var nav = $(".navbar");
    nav.toggleClass(
      "scrolled",
      $(this).scrollTop() > $("#self-portriat").height()
    );
  });

  //   =============================================
  // Detect when form-control inputs are not empty
  $(".cool-b4-form .form-control").on("input", function() {
    if ($(this).val()) {
      $(this).addClass("hasValue");
    } else {
      $(this).removeClass("hasValue");
    }
  });
  //   =============================================
});
