const sidebar = document.querySelector(".sidebar");
const heroSlide = document.querySelector(".heroSlide");
const sidemenuToggle = document.querySelector(".sidemenutoggle");
const sidemenuText = document.querySelectorAll(".sidemenuText");
sidemenuToggle.addEventListener("click", () => {
  sidemenuText.forEach((text) => {
    if (text.style.display == "none") {
      text.style.display = "inline";
      text.parentElement.style = "justify-content: start";

      sidebar.style = "flex: 1; min-width: 240; max-width: 250";
    } else {
      text.style.display = "none";
      text.parentElement.style = "justify-content: center";
      sidebar.style = "flex: ''; min-width: 0; max-width: 80px";
    }
  });
});

setInterval(() => {
  let bodyWidth = document.body.clientWidth;
  const checkBodyWidth = (() => {
    sidemenuText.forEach((text) => {
      if (bodyWidth <= 768) {
        text.style.display = "none";
        text.parentElement.style = "justify-content: center";
        sidebar.style = "flex: ''; min-width: 0; max-width: 80px";
        // heroSlide.style = "height: 40px";
      } else {
        text.style.display = "inline";
        text.parentElement.style = "justify-content: start";
        sidebar.style = "flex: 1; min-width: 240; max-width: 250";
      }
    });
  })();
}, 500);

///Swiper Settings😎
const swiper = new Swiper(".heroslide", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  loop: true,
});

////Top selling slide Config
const swiper1 = new Swiper(".topselling", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: true,
});

////Flash Sale SLide COnfig
const swiper3 = new Swiper(".flashSale", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: true,
});
