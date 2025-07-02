// Подключение свайпера
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
