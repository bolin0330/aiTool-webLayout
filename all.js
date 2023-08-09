const enterpriseSwiper = new Swiper ( ".enterprise-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true
})


const commentSwipper = new Swiper(".comment-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 24,
      loop: false
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 24
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
})
