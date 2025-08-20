// Подключение свайпера
import { auto } from "@popperjs/core";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const slider = new Swiper(".slider", {
  slidesPerView: 2,
  spaceBetween: 8,
  navigation: {
    prevEl: ".slider__controls-prev",
    nextEl: ".slider__controls-next",
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

const sliderProjects = new Swiper(".projects__slider", {
  slidesPerView: 2,
  spaceBetween: 4,
  navigation: {
    prevEl: ".projects__controls-button-prev",
    nextEl: ".projects__controls-button-next",
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
  },
});

const sliderPartners = new Swiper(".partners__slider", {
  slidesPerView: 6,
  spaceBetween: 4,
  freeMode: true,
  loop: true,
  navigation: {
    prevEl: ".partners__controls-button-prev",
    nextEl: ".partners__controls-button-next",
  },
  // breakpoints: {
  //   // when window width is >= 990px
  //   990: {
  //     slidesPerView: 6,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 6,
  //     spaceBetween: 4,
  //   },
  // },
});
