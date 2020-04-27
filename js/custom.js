$(function () {
    new WOW().init();

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#team-members").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:   { items: 1 },
            480: { items: 2 },
            768: { items: 4 }
        }
    });

    $("#services-showcase").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

    $("#press-releases").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:   { items: 1 },
            480: { items: 2 },
            768: { items: 4 },
            992: { items: 6 }
        }
    });

    $("nav").addClass("site-top-nav");

    $(window).scroll(function() {
      if($(this).scrollTop() < 50) {
        // $("nav").removeClass("site-top-nav");
        $("#back-to-top").fadeOut();
      }
      else {
        // $("nav").addClass("site-top-nav");
        $("#back-to-top").fadeIn();
      }
    });

    $("a.smooth-scroll").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

    $("#site-menu a").on("click touch", () => {
        $(".navbar-toggle").click();
    });
});
