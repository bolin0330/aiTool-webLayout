$(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('show');
  });
  $('.dropdown').mouseenter(function () {
    $(this).find('.dropdown-menu').stop().slideDown(100);
  });
  $('.dropdown').mouseleave(function () {
    $(this).find('.dropdown-menu').stop().slideUp(100);
  });
  $('.filter-list-selection').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  $('.page-gui').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  $('#btn-top').click(function () {
    $('html').animate({scrollTop: 0}, 1000);
  })
});

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
