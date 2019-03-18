$(document).ready(function () {
  /* Плавно прокручиваем страницу вверх*/
  $('#upTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  })

  /* Скрываем иконку прокрутки вверх при открытии страницы*/
  $('.upTop').hide();

  /* Плавно отображаем иконку при прокрктке вниз и скрываем при прокрутке вверх*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.upTop').fadeIn();
    } else {
      $('.upTop').fadeOut();
    }
  });

  /* Инициализация WOW.js */
  new WOW().init();

  /* Валидация форм */
  $('#offer-form').validate({
    rules: {
      customername: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      customername: {
        required: "Заполните поле",
        minlength: "Поле должно содержать минимум 2 символа",
        maxlength: "Поле не должно превышать 15 символов"
      },
      phone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  $('#brif-form').validate({

    rules: {
      customername: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      customername: {
        required: "Заполните поле",
        minlength: "Поле должно содержать минимум 2 символа",
        maxlength: "Поле не должно превышать 15 символов"
      },
      phone: "Заполните поле",
      email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  $('#modal-form').validate({
    rules: {
      phone: {
        required: true
      }
    },
    messages: {
      phone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  /* Маска для телефона*/
  $('.phone').mask('8 (999) 999-99-99');

  /* Инициализация слайдера */
  $('.slider').owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: false,
    itemElement: 'slider_item',
    navContainerClass: 'portfolio__arrows',
    navClass: ['arrows__left', 'arrows__right'],
    navText: [],
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

});