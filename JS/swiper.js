var swiper = new Swiper('.swiper-container', {
  slidesPerView:1.5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    500: {
      slidesPerView:2.2,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
    700: {
      slidesPerView:2.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
    800: {
      slidesPerView:3.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
    1000: {
      slidesPerView:4.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
  }
});

var yswiper = new Swiper('.youtube-container', {
  slidesPerView: 1.3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    700: {
      slidesPerView: 2.2,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
    800: {
      slidesPerView: 2.7,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
    },
  }
});
