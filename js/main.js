  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });


$('#resume').click(function(){
  $(".se-pre-con").show();
});
