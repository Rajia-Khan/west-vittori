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


  if (document.querySelector(".peopleSwiper")) {
    new Swiper(".peopleSwiper", {
      slidesPerView: "auto",
      spaceBetween: 20, // gap-5
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { spaceBetween: 20 },
        768: { spaceBetween: 20 },
        1024: { spaceBetween: 20 },
      },
    });
  }

  if (document.querySelector(".testimonialSwiper")) {
    new Swiper(".testimonialSwiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      loopedSlides: 8,
      speed: 1000,
      roundLengths: true,
      normalizeSlideIndex: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 0,
        },
        768: {
          spaceBetween: 0,
        }
      },
    });
  }

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
    const serviceTextSwiper = new Swiper(".serviceTextSwiper", {
      slidesPerView: 1,
      loop: true,
      allowTouchMove: false,
      speed: 800,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".service-pagination",
        clickable: true,
      },
    });

    const serviceImageSwiper = new Swiper(".serviceImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: true,
      speed: 800,
      navigation: {
        nextEl: ".service-next",
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        1024: { slidesPerView: 1.5, spaceBetween: 24 }
      }
    });

    // Sync sliders
    serviceTextSwiper.controller.control = serviceImageSwiper;
    serviceImageSwiper.controller.control = serviceTextSwiper;
  }

  if (document.querySelector(".projectGallerySwiper")) {
    new Swiper(".projectGallerySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.8,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".blogTextSwiper")) {
    const blogTextSwiper = new Swiper(".blogTextSwiper", {
      slidesPerView: 1,
      loop: true,
      allowTouchMove: false,
      speed: 800,
      pagination: {
        el: ".blog-pagination",
        clickable: true,
      },
    });

    const blogImageSwiper = new Swiper(".blogImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: true,
      speed: 800,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".blog-next",
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        1024: { slidesPerView: 1.5, spaceBetween: 24 }
      }
    });

    // Sync sliders
    blogImageSwiper.controller.control = blogTextSwiper;
    blogTextSwiper.controller.control = blogImageSwiper;
  }

  if (document.querySelector(".contactImageSwiper")) {
    const contactTextSwiper = new Swiper(".contactTextSwiper", {
      slidesPerView: 1,
      loop: true,
      allowTouchMove: false,
      speed: 800,
    });

    const contactImageSwiper = new Swiper(".contactImageSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 24,
      loop: true,
      allowTouchMove: true,
      speed: 800,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".contact-next",
      },
    });

    // Sync sliders
    contactImageSwiper.controller.control = contactTextSwiper;
    contactTextSwiper.controller.control = contactImageSwiper;
  }

  // Attach listeners for Project Modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      openModal('projectModal', 'projectModalContent', '/project-open.html');
    });
  });

  // Attach listeners for Team Modal
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal('teamModal', 'teamModalContent', '/team-open.html');
    });
  });
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

const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

function toggleSidebar() {
  // Slide sidebar in/out
  sidebar.classList.toggle("translate-x-full");
  // Fade overlay in/out
  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("pointer-events-none");
  // Prevent body scrolling when menu is open
  document.body.style.overflow = sidebar.classList.contains("translate-x-full")
    ? "auto"
    : "hidden";
}

openBtn.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// Mobile dropdown toggle function
function toggleMobileDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}

// Scroll animation for workplaces rows (Index Page Only)
window.addEventListener("scroll", function () {
  const scrollSection = document.getElementById("workplaces-scroll-section");
  if (scrollSection) {
    const row1 = document.getElementById("scroll-row-1");
    const row2 = document.getElementById("scroll-row-2");

    if (row1 || row2) {
      const rect = scrollSection.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Animation triggers when section is in viewport
      if (rect.top < viewHeight && rect.bottom > 0) {
        const scrollFactor = rect.top;

        if (row1) {
          // Increased multiplier for more translation, using translate3d for smoothness
          row1.style.transform = `translate3d(${scrollFactor * 0.4}px, 0, 0)`;
        }
        if (row2) {
          // Moves in opposite direction with a negative offset to keep icons visible
          row2.style.transform = `translate3d(${(scrollFactor * -0.4) - 400}px, 0, 0)`;
        }
      }
    }
  }
});

/* ================================
   MODAL LOGIC
================================ */

// Function to handle modal opening
async function openModal(modalId, contentId, url) {
  const modal = document.getElementById(modalId);
  const contentContainer = document.getElementById(contentId);

  if (!modal || !contentContainer) return;

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Extract everything inside <body>...</body> and also get classes from <body> tag
    const bodyMatch = html.match(/<body([^>]*)>([\s\S.]*)<\/body>/i);

    if (bodyMatch) {
      const bodyAttrs = bodyMatch[1];
      const bodyContent = bodyMatch[2];

      // Extract classes from the body tag of the source file
      const classMatch = bodyAttrs.match(/class="([^"]*)"/i);
      if (classMatch) {
        // Apply classes to container while preserving 'modal-container'
        contentContainer.className = 'modal-container ' + classMatch[1];
      }

      contentContainer.innerHTML = bodyContent;
    } else {
      contentContainer.innerHTML = html;
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Add event listener to the "CLOSE" button inside the modal
    // Match buttons linking to project.html (for projects) or about.html (for team)
    const closeBtn = contentContainer.querySelector('a[href*="project.html"], a[href*="about.html"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modalId);
      });
    }

    // Also allow clicking overlay to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modalId);
    });

  } catch (error) {
    console.error('Error loading modal content:', error);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}



