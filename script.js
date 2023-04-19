
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },

    breakpoints: {
        400: {
            slidesPerView: 1,
          },
        520: {
          slidesPerView: 2,
        },
        765: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 8
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 20
          }
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      spaceBetween: 40
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  });

  const fromButton = document.querySelector('.ask-confirm__button');
  
  const modal = document.querySelector('.tech__modal');
  const modalBg = document.querySelector('.modal__bg');

  const modalCross = document.querySelector('.tech-block__cross');
  const modalButton = document.querySelector('.tech-block__button');

  fromButton.onclick = function (e) {
    e.preventDefault();
    modal.classList.add("active");
    modalBg.classList.add("active");
  }

  modalCross.onclick = function (e) {
    modal.classList.remove("active");
    modalBg.classList.remove("active");
  }

  modalButton.onclick = function (e) {
    e.preventDefault();
    modal.classList.remove("active");
    modalBg.classList.remove("active");
  }
