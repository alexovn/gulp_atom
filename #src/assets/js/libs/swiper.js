import Swiper JS
import Swiper from 'swiper';
core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });