export default function sliders() {
  const portfolioSlider = document.querySelector(".s-portfolio__slider");

  if (portfolioSlider) {
    const slider = new Swiper(portfolioSlider, {
      speed: 700,
      slidesPerView: 2,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".s-portfolio .slider-btn._next",
        prevEl: ".s-portfolio .slider-btn._prev",
      },
      pagination: {
        el: ".s-portfolio .slider-pagination",
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
  }

  const teamSlider = document.querySelector(".s-our-team__slider");

  if (teamSlider) {
    const slider = new Swiper(teamSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
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
        }
      },
    });
  }
}
