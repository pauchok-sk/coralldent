export default function sliders() {
  const gallerySliders = document.querySelectorAll(".s-gallery__slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((s) => {
      const slider = new Swiper(s, {
        speed: 700,
        slidesPerView: 2,
        spaceBetween: 16,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: s.closest("section").querySelector(".slider-btn._next"),
          prevEl: s.closest("section").querySelector(".slider-btn._prev"),
        },
        pagination: {
          el: s.closest("section").querySelector(".slider-pagination"),
          clickable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        },
      });
    });
  }

  const teamSlider = document.querySelector(".s-our-team__slider");

  if (teamSlider) {
    const slider = new Swiper(teamSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: ".s-our-team .slider-btn._next",
        prevEl: ".s-our-team .slider-btn._prev",
      },
      pagination: {
        el: ".s-our-team .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".s-reviews__slider");

  if (reviewsSlider) {
    const slider = new Swiper(reviewsSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".s-reviews .slider-btn._next",
        prevEl: ".s-reviews .slider-btn._prev",
      },
      pagination: {
        el: ".s-reviews .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },
    });
  }

  const newsSlider = document.querySelector(".s-news__slider");

  if (newsSlider && window.matchMedia("(max-width: 1199px)").matches) {
    const slider = new Swiper(newsSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".s-news .slider-pagination",
        clickable: true
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        }
      }
    });
  }
}
