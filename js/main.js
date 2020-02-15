var navMainWrapper = document.querySelector('.main-nav');
var navMain = document.querySelector('.main-nav__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
var clickNumber = document.querySelector('.site-list__item--show_number');
var showNumber = document.querySelector('.form-number');
var closeNumber = document.querySelector('.form-number__close');


navMainWrapper.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

clickNumber.addEventListener('click', function() {
    showNumber.classList.remove('form-number--closed');
    showNumber.classList.add('form-number--opened');
});

closeNumber.addEventListener('click', function() {
    showNumber.classList.remove('form-number--opened');
    showNumber.classList.add('form-number--closed');
});
