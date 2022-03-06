$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });
  $(".owl-carousel.testimonials").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    
  });
});
