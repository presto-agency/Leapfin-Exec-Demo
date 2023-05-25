//Init Scrollbar
const footer = document.querySelector(".footer");
const footerInner = document.querySelector(".footer_inner");

let animation = document.getElementById("anim1");
animation.stop();
let animation2 = document.getElementById("anim2");
animation2.stop();

const slider = new Swiper(".main-wrapper", {
	grabCursor: false,
	allowTouchMove: false,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
	speed: 800,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoHeight: true,
	breakpoints: {},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {
		slideChange: function () {
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

				animation2.addEventListener("click", () => {
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
		},
	},
});
const sliderInner = new Swiper(".slider_inner", {
	grabCursor: false,
	allowTouchMove: false,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
	speed: 800,
	autoHeight: true,
	on: {
		click: function () {
			if (sliderInner.realIndex === 0) {
				footer.classList.remove("visible");
				sliderInner.slideNext();
			}
		},
		slideChange: function () {
			console.log(sliderInner.realIndex);
			if (sliderInner.activeIndex === 0) {
				footerInner.classList.remove("visible");
			}
			if (sliderInner.realIndex === 1) {
				footerInner.classList.add("visible");
			}
		},
	},
});

const btn = document.querySelector("#btnNav");
const navBtnInner = document.querySelector("#btnNavInner");
const title = document.querySelector(".segmentation__title");

btn.addEventListener("click", () => {
	slider.slideNext();
});

navBtnInner.addEventListener("click", () => {
	slider.slideNext();
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
		tabBtn.addEventListener("click", e => {
			let target = e.target.getAttribute("data-href");
			openTab(e, target);
		});
	});
};
toggleTab();

const periodBtn = document.querySelector("#periodBtn");
const segmentationTables = document.querySelectorAll(".segmentation-table");

periodBtn.addEventListener("click", e => {
	e.target.classList.add("active");
	segmentationTables.forEach(table => {
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
		tabBtn.addEventListener("click", e => {
			let target = e.target.getAttribute("data-href");
			periodBtn.classList.remove("active");
			segmentationTables.forEach(table => {
				table.classList.remove("active");
			});
			openSegmentationTab(e, target);
		});
	});
};
toggleSegmentationTab();

// Fix table head
function tableFixHead(e) {
	const el = e.target,
		sT = el.scrollTop;
	el.querySelectorAll("table th").forEach(
		th => (th.style.cssText = `transform: translateY(${sT}px);`)
	);
}
document
	.querySelectorAll(".segmentation-table_scroll")
	.forEach(el => el.addEventListener("scroll", tableFixHead));

document
	.querySelectorAll(".logic-table_bottom")
	.forEach(el => el.addEventListener("scroll", tableFixHead));

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
		tabBtn.addEventListener("click", e => {
			let target = e.target.getAttribute("data-href");
			openLogicTab(e, target);
		});
	});
};
toggleLogicTab();

const tabContent = document.querySelector("#chart");

document.addEventListener("click", e => {
	console.log(e.target.getAttribute("aria-label"));
	if (e.target.id === "chartBtn") {
		document.querySelector(".segmentation__title").style.display = "none";
	} else if (tabContent.classList.contains("active")) {
		document.querySelector(".segmentation__title").style.display = "none";
	} else if (e.target.id !== "chartBtn") {
		document.querySelector(".segmentation__title").style.display = "block";
	}
});

const bullets = document.querySelectorAll(".swiper-pagination-bullet");
bullets.forEach(bullet => {
	bullet.addEventListener("click", () => {
		sliderInner.slidePrev();
	});
});
