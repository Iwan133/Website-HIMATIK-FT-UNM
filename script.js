// 1. Inisialisasi AOS untuk menjalankan semua animasi
AOS.init({
    once: true, // Animasi hanya berjalan sekali
    duration: 1000,
});

// 2. Inisialisasi Swiper untuk slider video
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});