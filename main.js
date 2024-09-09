import './assets/scss/all.scss';
// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.15,
      centeredSlides: true,
      cssMode: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    //   },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        992: {
          slidesPerView: 1.15, // 較大螢幕的設置
        },
        0: {
          slidesPerView: 1, // 手機版的設置，顯示一個內容
        },
      },
    });
console.log("Hello world!");