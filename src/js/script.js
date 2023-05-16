//Init Scrollbar
const footer = document.querySelector(".footer");
const nav = document.querySelector(".section__navigation");
// footer.style.opacity = 0;

let animation = document.getElementById("anim1");
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

const slider = new Swiper(".main-wrapper", {
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
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {

    // 1023: {

    // }
  },
  // slideToClickedSlide: true,
  // shortSwipes: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    click: function () {
      if (slider.realIndex === 0) {
        footer.classList.remove("visible")
        // slider.navigation.nextEl = ".swiper-button-next"
        slider.slideNext();
      }
    },
    slideChange: function () {
      console.log(slider.realIndex)
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
  }

});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  slider.slideNext()
});



function openTab(evt, cityName) {
  let i, tabContent, tabLinks;
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

const tabBtns = document.querySelectorAll(".tab__links");
const toggleTab = () => {
  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-href");
      openTab(e, target)
    })
  });
};
toggleTab()