document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".mySwiper")) {
    const mySwiper = new Swiper(".mySwiper", {
      initialSlide: 2,
      slidesPerView: 1.2,
      spaceBetween: 24,
      centeredSlides: true,
      slideToClickedSlide: true,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mySwiper-next",
      },
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
  }

  function updateActiveCategory(swiper) {
    if (!swiper.slides) return;
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

  if (document.querySelector(".projectHeroSwiper")) {
    new Swiper(".projectHeroSwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".project-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".serviceTextSwiper")) {
    const serviceImageSwiper = new Swiper(".serviceImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".service-next",
      },
    });

    const serviceTextSwiper = new Swiper(".serviceTextSwiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".service-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".projectGallerySwiper")) {
    new Swiper(".projectGallerySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".blogTextSwiper")) {
    const blogImageSwiper = new Swiper(".blogImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".blog-next",
      },
    });

    const blogTextSwiper = new Swiper(".blogTextSwiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".blog-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".contactImageSwiper")) {
    const contactImageSwiper = new Swiper(".contactImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".contact-next",
      },
    });
  }
});

//Tabs
function filterProjects(category, element) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Update button active state
  buttons.forEach((btn) => {
    btn.classList.remove("bg-black", "text-white");
    btn.classList.add("bg-[#FFB38E]/30", "text-black");
  });
  element.classList.add("bg-black", "text-white");
  element.classList.remove("bg-[#FFB38E]/30", "text-black");

  // Filter with smooth transition
  cards.forEach((card) => {
    card.classList.add("transition-all", "duration-500");
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
      setTimeout(() => {
        card.style.opacity = "1";
      }, 10);
    } else {
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.display = "none";
      }, 500);
    }
  });
}
