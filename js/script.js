var menu = document.querySelector(".page-header__menu");
var menu_item = document.querySelector(".page-header__item a");
var btnMenu = document.querySelector(".page-header__btnMenu");

menu.classList.remove('page-header__menu--nojs');

if(menu.classList.contains("page-header__menu--opened")) {
  menu.classList.remove("page-header__menu--opened");
  menu.classList.add("page-header__menu--closed");
}

btnMenu.addEventListener("click", function(e) {
  if(menu.classList.contains("page-header__menu--closed")) {
    menu.classList.remove("page-header__menu--closed");
    menu.classList.add("page-header__menu--opened");
  } else {
    menu.classList.remove("page-header__menu--opened");
    menu.classList.add("page-header__menu--closed");
  }
});

/* SLIDER */

function jsHere(elems, noJsClass) {
  elems.forEach(function(i) {
    i.classList.remove(noJsClass);
  });
}

function sliderItemsClear(arrItems, arrToggles, itemClass, toggleClass, currIndex) {
  for(let i = 0; i < arrItems.length; i++) {
    if(i == currIndex) {
      continue;
    } else {
      arrItems[i].classList.remove(itemClass);
      arrToggles[i].classList.remove(toggleClass);
    }
  }
}
function sliderInit(parentElemClassName) {
  var slider = document.querySelectorAll(".slider");
  
  if(!slider) return false;
  
  jsHere(slider, 'slider--nojs');

  var parentElem = document.querySelector("." + parentElemClassName);
  if(!parentElem) return false;

  var slider_item = Array.from(parentElem.querySelectorAll(".slider__item"));
  var slider_toggleS = parentElem.querySelector(".slider__toggles");
  var slider_toggle = Array.from(parentElem.querySelectorAll(".slider__toggle"));

  slider_toggleS.addEventListener("click", function(e) {
    
    if(e.target == slider_toggleS) return false;
  
    var currToggleIndex = slider_toggle.indexOf(e.target);
  
    slider_item[currToggleIndex].classList.add("slider__item--active");
    slider_toggle[currToggleIndex].classList.add("slider__toggle--active");
  
    sliderItemsClear(slider_item, slider_toggle, "slider__item--active", "slider__toggle--active", currToggleIndex);
  });
}
/* SLIDER CAROUSEL with toggle dots */
function sliderCarouselInit(parentElemClassName) {

  var parentElem = document.querySelector("." + parentElemClassName);
  if(!parentElem) return false;

  var slider_carousel = parentElem.querySelector(".slider-carousel");
  var toggleLeft = parentElem.querySelector(".slider-carousel__left");
  var toggleRight = parentElem.querySelector(".slider-carousel__right");
  var slider_item = Array.from(parentElem.querySelectorAll(".slider__item"));
  var slider_toggleS = parentElem.querySelector(".slider__toggles");
  var slider_toggle = Array.from(parentElem.querySelectorAll(".slider__toggle"));

  var currToggleIndex = currToggleIndex | 0;
  var togglesNumber = slider_toggle.length;

  slider_toggle.forEach(function(toggle) {
    if(toggle.classList.contains("slider__toggle--active")) {
      currToggleIndex = slider_toggle.indexOf(toggle);
    }
  });

  
  slider_carousel.addEventListener("click", function(e) {
    
    if(e.target == slider_carousel && e.target != slider_toggleS) {
      return false;
    }

    if(e.target == toggleLeft || e.target.parentNode == toggleLeft) {
      currToggleIndex = Math.abs(currToggleIndex - 1 + togglesNumber) % togglesNumber;
    } else if (e.target == toggleRight || e.target.parentNode == toggleRight) {
      currToggleIndex = Math.abs(currToggleIndex + 1) % togglesNumber;
    } else {
      return false;
    }
  
    slider_item[currToggleIndex].classList.add("slider__item--active");
    slider_toggle[currToggleIndex].classList.add("slider__toggle--active");

    sliderItemsClear(slider_item, slider_toggle, "slider__item--active", "slider__toggle--active", currToggleIndex);
  });
}

sliderInit("features");

sliderInit("reviews");
sliderCarouselInit("reviews");


/*
var slider_carousel = document.querySelectorAll(".slider-carousel");
jsHere(slider_carousel, 'slider--nojs');
*/
/* MODAL POP-UPs */

var btn_menu = document.querySelector(".page-header__item--user-block");
var modal = document.querySelector(".modal");
var btn_close_modal = modal.querySelector(".modal__close");
var btn_close_login = modal.querySelector(".btn--clear-bg");

btn_menu.addEventListener("click", function(e) {

  e.preventDefault();

  menu.classList.remove("page-header__menu--opened");
  menu.classList.add("page-header__menu--closed");

  modal.classList.add("modal--show");
});

modal.addEventListener("click", function(e) {

  if(e.target == btn_close_modal || e.target == btn_close_login) {
    modal.classList.remove("modal--show");
  }
});

window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.classList.remove("modal--show");
  }
});





