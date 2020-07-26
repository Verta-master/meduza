//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu__list').slideToggle();
});

//Footer menu
if (window.innerWidth < 1022) {
  $('.footer__title--list').click(function() {
    $(this).next().slideToggle();
  })
}
