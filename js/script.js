$(document).ready(function () {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.modal').modal();
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        console.log(target);
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            // $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              // $target.focus(); // Set focus again
            };
          });
        }
      }
  });

  $('ul.side-nav a').click( function() {
    $('.button-collapse').sideNav('hide');
  });

  $('#contact-form').submit(function(e){
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you " + $('#contact-form #name').val());
    });
  });
});
