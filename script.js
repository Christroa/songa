$(".mainSlide").owlCarousel({
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

$(".subSlide").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    425: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});
