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
  });
  $('.faq-q').click(function (e) {
    e.preventDefault();
    $(this).find('.add-icon').toggleClass('d-none');
    $(this).find('.remove-icon').toggleClass('d-inline-block');
    $(this).find('.faq-a').fadeToggle('show');
  })
});

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

const apiPath = 'https://2023-engineer-camp.zeabur.app';
const list = document.querySelector('#list');
const pagination = document.querySelector('#pagination');

const data = {
  type: '',
  sort: 0,
  page: 1,
  search: '',
}

let worksData = [];
let pagesData = {};

const getData = ({ type, sort, page, search }) => {
  const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
  axios.get(apiUrl)
    .then((res) => {
      worksData = res.data.ai_works.data;
      pagesData = res.data.ai_works.page;

      renderWorks();
      renderPages();
    })
}

getData(data);

const renderWorks = () => {
  let works = '';

  worksData.forEach((item) => {
    works += /*html*/`<li class="col-4 card">
      <div class="h-100 card-frame">
        <div class="card-exhibit">
          <img class="w-100 card-zooming" src="${item.imageUrl}" alt="ai image">
        </div>
        <div class="card-context">
          <h3 class="h5 mb-12">${item.title}</h3>
          <p class="text-sm text-gray">${item.description}</p>
        </div>
        <div class="card-drawer">
          <h4 class="h6">AI 模型</h4>
          <p>${item.model}</p>
        </div>
        <div class="card-drawer">
          <span>#${item.type}</span>
          <a href="${item.link}" target="_blank">
            <span class="material-icons">
              share
            </span>
          </a>
        </div>
      </div>
    </li>`
  });

  list.innerHTML = works;
}

const changePage = (pagesData) => {
  const pageLinks = document.querySelectorAll('li.page-gui');
  let pageId = '';

  pageLinks.forEach((item) => {

    item.addEventListener('click', (e) => {
      e.preventDefault();
      pageId = e.target.dataset.page;
      data.page = Number(pageId);

      if (!pageId) {
        data.page = Number(pagesData.current_page) + 1
      }

      getData(data);
    });
  });
}

const renderPages = () => {
  let pageStr = '';

  for (let i = 1; i <= pagesData.total_pages; i += 1) {
    pageStr += /*html*/`<li class="page-gui ${pagesData.current_page == i ? 'active' : ''}" >
      <a class="page-link ${pagesData.current_page == i ? 'disabled' : ''}" href="#"  data-page="${i}">${i}</a>
    </li>`
  };

  if (pagesData.has_next) {
    pageStr +=  /*html*/`<li class="page-gui">
        <span class="material-icons">
          chevron_right
        </span>
      </a>
    </li>`
  };
  pagination.innerHTML = pageStr;

  changePage(pagesData);
}