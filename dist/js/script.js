"use strict";

var _Swiper;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//Init Scrollbar
var footer = document.querySelector(".footer");
var nav = document.querySelector(".section__navigation");
// footer.style.opacity = 0;

var animation = document.getElementById("anim1");
animation.stop();
// animation.intermission()
// console.log(animation.totalFrames);
// animation.addEventListener("ready", () => {
//   console.log("You've captured the ready event!");
// });

// var container = document.getElementById("anim1"),
//   anim = lottie.loadAnimation({
//     container: container,
//     renderer: "svg",
//     loop: false,
//     autoplay: true,
//     path: "../img/animation.json"
//   });

// anim.addEventListener("enterFrame", function (animation) {
//   if (animation.currentTime > (anim.totalFrames - 1)) {
//     anim.pause();
//   }
// });

var slider = new Swiper(".main-wrapper", (_Swiper = {
  grabCursor: false,
  // loop: false,
  // spaceBetween: 0,
  // slidesPerView: 1,
  // freeMode: false,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  // noSwiping: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}, _defineProperty(_Swiper, "autoHeight", true), _defineProperty(_Swiper, "breakpoints", {

  // 1023: {

  // }
}), _defineProperty(_Swiper, "navigation", {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
}), _defineProperty(_Swiper, "on", {
  click: function click() {
    if (slider.realIndex === 0) {
      footer.classList.remove("visible");
      // slider.navigation.nextEl = ".swiper-button-next"
      slider.slideNext();
    }
  },
  slideChange: function slideChange() {
    console.log(slider.realIndex);
    if (slider.activeIndex === 0) {
      footer.classList.remove("visible");
      nav.classList.remove("visible");
      // slider.navigation.nextEl = ".swiper-button-next"
    }

    if (slider.realIndex === 1) {
      footer.classList.add("visible");
      // nav.classList.add("visible");
    }

    if (slider.realIndex !== 2) {
      animation.stop();
    }
    if (slider.realIndex === 2) {
      nav.classList.remove("visible");
      footer.classList.add("visible");
      // animation.getLottie().totalFrames = 300
      animation.play();
    }
    if (slider.realIndex === 7) {
      footer.classList.remove("visible");
    }
  }
}), _Swiper));
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  slider.slideNext();
});
function openTab(evt, cityName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabLinks = document.getElementsByClassName("tab__links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.className += " active";
}
var tabBtns = document.querySelectorAll(".tab__links");
var toggleTab = function toggleTab() {
  tabBtns.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function (e) {
      var target = e.target.getAttribute("data-href");
      openTab(e, target);
    });
  });
};
toggleTab();