import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import InfinityScroll from '../components/infinityScroll';
import setCarousel from '../components/carousel';
import { updatePriceBlock } from '../components/utilities';

Swiper.use([Navigation, Pagination, Lazy]);

const Home = {
  setFullbanner: () => {
    const fullbanners = document.querySelectorAll('[data-fullbanner]');

    fullbanners.forEach((section) => {
      const carousel = section.querySelector('.swiper');
      const pagination = section.querySelector('.swiper-pagination');
      const next = section.querySelector('.swiper-button-next');
      const prev = section.querySelector('.swiper-button-prev');

      new Swiper(carousel, {
        slidesPerView: 1,
        watchOverflow: true,
        preloadImages: false,
        speed: 1000,
        lazy: {
          checkInView: true,
          loadPrevNext: false,
          loadOnTransitionStart: true,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true,
        },
      });
    });
  },
  setInstagramSwiper: function () {
    const instagramSwiper = new Swiper('[data-instagram-swiper]', {
      slidesPerView: 2.3,
      slidesPerGroup: 2,
      spaceBetween: 10,
      preloadImages: false,
      speed: 1000,
      lazy: {
        checkInView: true,
        loadPrevNext: true,
        loadOnTransitionStart: true,
        loadPrevNextAmount: 4,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: '[data-instagram-swiper] .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  },
  init: function () {
    this.setFullbanner();
    setCarousel();
    updatePriceBlock();
    this.setInstagramSwiper();
    InfinityScroll.init();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Home.init()
})
