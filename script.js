document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".mySwiper", {
    initialSlide: 2,
    slidesPerView: 1.2,
    spaceBetween: 24,
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    breakpoints: {
      640: { slidesPerView: 2.2, spaceBetween: 24 },
      1024: { slidesPerView: 4.8, spaceBetween: 24 },
    },
    on: {
      init() {
        updateActiveCategory(this);
      },
      slideChange() {
        updateActiveCategory(this);
      },
    },
  });

  function updateActiveCategory(swiper) {
    swiper.slides.forEach((slide) => {
      const title = slide.querySelector(".category-title");
      if (title) title.classList.remove("is-active");
    });
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const title = activeSlide.querySelector(".category-title");
      if (title) title.classList.add("is-active");
    }
  }

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
  new Swiper(".testimonialSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    speed: 800, // Smooth transition speed
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1.8 },
      1024: { slidesPerView: 2.5 }, // Adjusted for better visibility of side cards
    },
  });
});
