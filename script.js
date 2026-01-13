var swiper = new Swiper(".mySwiper", {
  initialSlide: 2,
  slidesPerView: 1.3,
  spaceBetween: 24,
  centeredSlides: false,
  grabCursor: true,
  breakpoints: {
    640: { slidesPerView: 2.4, spaceBetween: 24 },
    1024: { slidesPerView: 4.6, spaceBetween: 24 },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 2.2 },
      1024: { slidesPerView: 4.2 },
    },
  });

  new Swiper(".peopleSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 24,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2.5 },
      1024: { slidesPerView: 4.5 },
    },
  });
});
