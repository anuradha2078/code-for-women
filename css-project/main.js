$(document).ready(() => {
  $(document).on("scroll", () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos >= 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }

    if (scrollPos >= 500) {
      $("#top").addClass("show");
    } else {
      $("#top").removeClass("show");
    }
  });

  $("#about").waypoint(
    () => {
      $("#about .about-img").addClass("show-about-img-animation ");
      $("#about .about-content").addClass("show-about-content-animation ");
    },
    {
      offset: "50%",
    }
  );

  $("#courses").waypoint(
    () => {
      $("#courses .course-card").addClass("show-courses-animation");
    },
    {
      offset: "50%",
    }
  );

  // owl carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });

  $(".submit-btn").on("click", (e) => {
    e.preventDefault();
    console.log(
      $("#name").val(),
      $("#email").val(),
      $("#subject").val(),
      $("#message").val()
    );
  });
});
