$(document).ready(() => {
  $(".container").on("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    $(".container .card").css({
      transform: `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`,
    });
  });

  $(".container").on("mouseenter", () => {
    $(".container .card").css({
      transition: "all 0.1s ease",
    });

    $(".shoes img").css({
      transform: "translateZ(100px) scale(1.2) rotate(-45deg)",
      transition: "all 0.1s ease",
    });
    $(".info").css({
      transform: "translateZ(80px)",
      transition: "all 0.1s ease",
    });
  });

  $(".container").on("mouseleave", () => {
    $(".container .card").css({
      transform: `rotateX(0deg) rotateY(0deg)`,
      transition: "all 0.5s ease",
    });
    $(".shoes img").css({
      transform: "translateZ(0)",
      transition: "all 0.5s ease",
    });

    $(".info").css({
      transform: "translateZ(0)",
      transition: "all 0.5s ease",
    });
  });
});
