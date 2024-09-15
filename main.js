import './assets/scss/all.scss';
// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.15,
      spaceBetween: 40,
      centeredSlides: true,
      cssMode: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        992: {
          slidesPerView: 1.15, // 較大螢幕的設置
        },
        0: {
          slidesPerView: 1, // 手機版的設置，顯示一個內容
        },
      },
    });

 const swiper2 = new Swiper(".classSwiper", {
    slidesPerView: 1.01,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper2-pagination",
      dynamicBullets: true,
    },
});

const swiper3 = new Swiper(".buySwiper", {
    
    slidesPerGroup:1,
    spaceBetween: 24,
    centeredSlides: true,
    cssMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".swiper-pagination-buy",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      992: {
        slidesPerView: 5, // 較大螢幕的設置
      },
      0: {
        slidesPerView: 1.2, // 手機版的設置，顯示一個內容
      },
    },
  });

  const swiper4 = new Swiper(".teacherSwiper", {
    slidesPerView: 1.01,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper2-pagination",
      dynamicBullets: true,
    },
});

      AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animate__animated',
      duration:4000
    });

console.log("Hello world!");