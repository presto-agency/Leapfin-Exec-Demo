//Init Scrollbar
const footer = document.querySelector(".footer");
const footerInner = document.querySelector(".footer_inner");

// const nav = document.querySelector(".section__navigation");

let animation = document.getElementById("anim1");
animation.stop();
let animation2 = document.getElementById("anim2");
animation2.stop();
let pauseElem = document.querySelector('[clip-path="url(#__lottie_element_2517)]"');
console.log(pauseElem)
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
    // click: function () {
    //   if (slider.realIndex === 0) {
    //     footer.classList.remove("visible")
    //     // slider.navigation.nextEl = ".swiper-button-next"
    //     slider.slideNext();
    //   }
    // },
    slideChange: function () {
      console.log(slider.realIndex)
      if (slider.activeIndex === 0) {
        footer.classList.remove("visible");
        // nav.classList.remove("visible");
        // slider.navigation.nextEl = ".swiper-button-next"
      }
      if (slider.realIndex === 1) {
        footer.classList.add("visible");
        // nav.classList.add("visible");

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

        animation2.addEventListener("click", ()=> {
        console.log("continue")

          animation2.getLottie().totalFrames = 419;
          animation2.play();
        });
        // console.log()
        // console.log(  animation2.seek(100));
        // animation2.seek(100);
      }
      if (slider.realIndex === 6) {
        footer.classList.remove("visible");
      }
    }
  }

});
const sliderInner = new Swiper(".slider_inner", {
  grabCursor: false,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  speed: 800,
  autoHeight: true,
  on: {
    click: function () {
      if (sliderInner.realIndex === 0) {
        footer.classList.remove("visible")
        // slider.navigation.nextEl = ".swiper-button-next"
        sliderInner.slideNext();
      }
    },
    slideChange: function () {
      console.log(sliderInner.realIndex)
      if (sliderInner.activeIndex === 0) {
        footerInner.classList.remove("visible");
        // nav.classList.remove("visible");
        // slider.navigation.nextEl = ".swiper-button-next"
      }
      if (sliderInner.realIndex === 1) {
        footerInner.classList.add("visible");
        // nav.classList.add("visible");
      }
      // if (slider.realIndex !== 2) {
      //   animation.stop();
      // }
      // if (slider.realIndex === 2) {
      //   nav.classList.remove("visible");
      //   footer.classList.add("visible");
      //   // animation.getLottie().totalFrames = 300
      //   animation.play();
      // }
      // if (slider.realIndex === 7) {
      //   footer.classList.remove("visible");
      // }
    }
  }

});

const btn = document.querySelector("#btnNav");
const navBtnInner = document.querySelector("#btnNavInner");


btn.addEventListener("click", () => {
  slider.slideNext()
});

navBtnInner.addEventListener("click", () => {
  slider.slideNext()
});

// data source tabs *****************************************
function openTab(evt, tabName) {
  let i, tabContent, tabLinks;
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

const tabButtons = document.querySelectorAll(".tab__links");
const toggleTab = () => {
  tabButtons.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-href");
      openTab(e, target)
    })
  });
};
toggleTab();


const periodBtn = document.querySelector("#periodBtn");
const segmentationTables = document.querySelectorAll(".segmentation-table");

periodBtn.addEventListener("click", (e) => {
  e.target.classList.add("active");
  // document.querySelector(".segmentation-table").classList.add("active");
  segmentationTables.forEach((table) => {
    table.classList.add("active");
  });
});

// segmentation screen tabs *****************************************
function openSegmentationTab(evt, tabName) {
  let i, tabContent, tabLinks;
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

const segmentationButtons = document.querySelectorAll(".segmentation_tab__btn");
const toggleSegmentationTab = () => {
  segmentationButtons.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-href");
      periodBtn.classList.remove("active");
      segmentationTables.forEach((table) => {
        table.classList.remove("active");
      });
      openSegmentationTab(e, target)
    })
  });
};
toggleSegmentationTab();


// Fix table head
function tableFixHead(e) {
  const el = e.target,
    sT = el.scrollTop;
  el.querySelectorAll("table th").forEach(th =>
    // th.classList.add("fixed")
    // th.style.transform = `translateY(${sT}px)`,
    th.style.cssText = `transform: translateY(${sT}px);`
  );
}
document.querySelectorAll(".segmentation-table_scroll").forEach(el =>
  el.addEventListener("scroll", tableFixHead)
);

document.querySelectorAll(".logic-table_bottom").forEach(el =>
  el.addEventListener("scroll", tableFixHead)
);



function openLogicTab(evt, cityName) {
  let i, tabContent, tabLinks;
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

const tabBtns = document.querySelectorAll(".logic-tab__link.blue");
const toggleLogicTab = () => {
  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-href");
      openLogicTab(e, target)
    })
  });
};
toggleLogicTab()


