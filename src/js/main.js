/*var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});*/


/* Плавно прокручиваем страницу вверх*/
$('#upTop').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
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