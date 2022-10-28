//  SLIDER //
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

// image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});
//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});
//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
};
repeater();

//SEARCH BUTTON
//<i class="fa fa-times" aria-hidden="true"></i>

let navBar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");

searchBox.addEventListener("click", () => {
  navBar.classList.toggle("showInput");
  if (navBar.classList.contains("showInput")) {
    searchBox.classList.replace("fa-search", "fa-times");
  } else {
    searchBox.classList.replace("fa-times", "fa-search");
  }
});

// sidebar open close JS
let navLinks = document.querySelector(".navbar .nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-times");

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0";
});
menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});

//SCRIPT SUB MENU MOBILE OPEN
let equipeArrow = document.querySelector(".equipe-arrow");

equipeArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show1");
});
let clubArrow = document.querySelector(".club-arrow");

clubArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show2");
});
let mediaArrow = document.querySelector(".media-arrow");

mediaArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show3");
});

// Fixed navbar

let navbar = document.getElementById("nav-bar");
let mainNav = document.getElementById("main-nav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    mainNav.classList.add("sticky");
  } else {
    mainNav.classList.remove("sticky");
  }
});
