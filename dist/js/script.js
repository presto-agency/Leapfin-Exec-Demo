"use strict";

var _Swiper, _Swiper2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//Init Scrollbar
var footer = document.querySelector(".footer");
var footerInner = document.querySelector(".footer_inner");
// const footerSegmentation = document.querySelector(".footer_segmentation");

// const nav = document.querySelector(".section__navigation");

var animation = document.getElementById("anim1");
animation.stop();
var animation2 = document.getElementById("anim2");
animation2.stop();
var slider = new Swiper(".main-wrapper", (_Swiper = {
  grabCursor: false,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}, _defineProperty(_Swiper, "autoHeight", true), _defineProperty(_Swiper, "breakpoints", {}), _defineProperty(_Swiper, "navigation", {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
}), _defineProperty(_Swiper, "on", {
  slideChange: function slideChange() {
    console.log(slider.realIndex);
    if (slider.activeIndex === 0) {
      footer.classList.remove("visible");
    }
    if (slider.realIndex === 1) {
      footer.classList.add("visible");
    }
    if (slider.realIndex !== 1) {
      animation.stop();
    }
    if (slider.realIndex === 1) {
      footer.classList.add("visible");
      animation.play();
    }
    if (slider.realIndex !== 3) {
      animation2.stop();
    }
    if (slider.realIndex === 3) {
      animation2.getLottie().totalFrames = 200;
      animation2.play();
      animation2.addEventListener("click", function () {
        console.log("continue");
        animation2.getLottie().totalFrames = 419;
        animation2.play();
      });
    }
    if (slider.realIndex === 5) {
      footer.classList.add("visible");
    }
    if (slider.realIndex === 6) {
      footer.classList.remove("visible");
    }
  }
}), _Swiper));
var sliderInner = new Swiper(".slider_inner", (_Swiper2 = {
  grabCursor: false,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  speed: 800
}, _defineProperty(_Swiper2, "autoHeight", true), _defineProperty(_Swiper2, "on", {
  click: function click() {
    if (sliderInner.realIndex === 0) {
      footer.classList.remove("visible");
      // slider.navigation.nextEl = ".swiper-button-next"
      sliderInner.slideNext();
    }
  },
  slideChange: function slideChange() {
    console.log(sliderInner.realIndex);
    if (sliderInner.activeIndex === 0) {
      footerInner.classList.remove("visible");
    }
    if (sliderInner.realIndex === 1) {
      footerInner.classList.add("visible");
    }
  }
}), _Swiper2));
var btn = document.querySelector("#btnNav");
var navBtnInner = document.querySelector("#btnNavInner");
var title = document.querySelector(".segmentation__title");
btn.addEventListener("click", function () {
  slider.slideNext();
});
navBtnInner.addEventListener("click", function () {
  slider.slideNext();
});
// navBtnOuter.addEventListener("click", () => {
//   slider.slideNext()
// });

// data source tabs *****************************************
function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabLinks = document.getElementsByClassName("tab__links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
}
var tabButtons = document.querySelectorAll(".tab__links");
var toggleTab = function toggleTab() {
  tabButtons.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function (e) {
      var target = e.target.getAttribute("data-href");
      openTab(e, target);
    });
  });
};
toggleTab();
var periodBtn = document.querySelector("#periodBtn");
var segmentationTables = document.querySelectorAll(".segmentation-table");
periodBtn.addEventListener("click", function (e) {
  e.target.classList.add("active");
  // document.querySelector(".segmentation-table").classList.add("active");
  segmentationTables.forEach(function (table) {
    table.classList.add("active");
  });
});

// segmentation screen tabs *****************************************
function openSegmentationTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("segmentation-tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabLinks = document.getElementsByClassName("segmentation_tab__btn");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
}
var segmentationButtons = document.querySelectorAll(".segmentation_tab__btn");
var toggleSegmentationTab = function toggleSegmentationTab() {
  segmentationButtons.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function (e) {
      var target = e.target.getAttribute("data-href");
      periodBtn.classList.remove("active");
      segmentationTables.forEach(function (table) {
        table.classList.remove("active");
      });
      openSegmentationTab(e, target);
    });
  });
};
toggleSegmentationTab();

// Fix table head
function tableFixHead(e) {
  var el = e.target,
    sT = el.scrollTop;
  el.querySelectorAll("table th").forEach(function (th) {
    return (
      // th.classList.add("fixed")
      // th.style.transform = `translateY(${sT}px)`,
      th.style.cssText = "transform: translateY(".concat(sT, "px);")
    );
  });
}
document.querySelectorAll(".segmentation-table_scroll").forEach(function (el) {
  return el.addEventListener("scroll", tableFixHead);
});
document.querySelectorAll(".logic-table_bottom").forEach(function (el) {
  return el.addEventListener("scroll", tableFixHead);
});
function openLogicTab(evt, cityName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("logic-tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("logic-tab__link blue");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
var tabBtns = document.querySelectorAll(".logic-tab__link.blue");
var toggleLogicTab = function toggleLogicTab() {
  tabBtns.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function (e) {
      var target = e.target.getAttribute("data-href");
      openLogicTab(e, target);
    });
  });
};
toggleLogicTab();
var tabContent = document.querySelector("#chart");
document.addEventListener("click", function (e) {
  console.log(e.target.getAttribute("aria-label"));
  if (e.target.id === "chartBtn") {
    document.querySelector(".segmentation__title").style.display = "none";
  } else if (tabContent.classList.contains("active")) {
    document.querySelector(".segmentation__title").style.display = "none";
  } else if (e.target.id !== "chartBtn") {
    document.querySelector(".segmentation__title").style.display = "block";
  }
});

// const chartBtn = document.querySelector("#chartBtn");
// chartBtn.addEventListener("click", () => {
//   document.querySelector(".segmentation__title").style.display = "none";
// });