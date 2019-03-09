$(document).ready(function () {
  $('.slider').owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: false,
    itemElement: 'slider_item',
    navContainerClass: 'portfolio__arrows',
    navClass: ['arrows__left', 'arrows__right'],
    navText: [],
    responsiveClass: true,
    responsive: {
       0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    }
  });
});