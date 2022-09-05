const navBtn = document.querySelector(".navbar-toggler");
const navBtnIcon = document.querySelector(".navbar-toggler i");
const sidebar = document.querySelector(".side > div");
const bb = document.querySelector("body");
navBtn.addEventListener("click", () => {
  colapseactive = navBtn.getAttribute("aria-expanded");
  if (colapseactive == "true") {
    navBtn.style = "position: absolute; left:75%;";
    // navBtnIcon.removeAttribute("class");
    navBtnIcon.setAttribute("class", "fa fa-x");
  } else {
    navBtnIcon.setAttribute("class", "fa fa-bars");
    navBtn.style = "position: static; right: left;";
  }
});

// alert(sidebar.clientHeight)
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
