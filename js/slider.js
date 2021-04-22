/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */
// slider

const swiper = new Swiper('.swiper-container', {

  direction: 'vertical',
  slidesPerView: 1,
  speed: 3000,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEfferc: {
    crossFade: true,
  },

});
