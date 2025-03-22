document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("iframe").addEventListener("load", function () {
    console.log("Iframe has loaded!");
    gsap.to("#poster", {
      delay: 0.3,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        // document.getElementById("poster").style.display = "none"; // Hide poster after animation
      },
    });

    gsap.to("#iframe", {
      delay: 0.3,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  var splide = new Splide(".facilities-carousels", {
    pagination: true,
    arrows: false,
    easing: "ease-out",
    drag: true,
    perPage: 1,
    perMove: 1,
  });
  splide.mount();

  var splide2 = new Splide(".charging-carousels", {
    pagination: false,
    arrows: true,
    easing: "ease-out",
    drag: true,
    gap: 20,
    mediaQuery: "max",
    breakpoints: {
      768: {
        type: "loop",
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
    perPage: 2,
    perMove: 1,
  });
  splide2.mount();

  const logoClick = document.getElementById("logo");

  logoClick.addEventListener("click", function () {
    window.open(clickTag, "_blank");
  });
});
