/**
 * ! For Slideshow
 * **/
const slides = document.getElementsByClassName("slide");
const circles = document.getElementsByClassName("circle");

let counter = 0;

const backword = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideShow();
};

const forword = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideShow();
};

const slideShow = () => {
  for (i = 0; i < slides.length; i++) {
    if (counter !== i) {
      slides[i].classList.add("hidden");
      circles[i].classList.remove("bg-black");
    } else {
      slides[i].classList.remove("hidden");
      circles[i].classList.add("bg-black");
    }
  }
};

/**
 * ! For Image Manipulation
 * **/

window.addEventListener("load", () => {
  if (this.window.innerWidth < 640) {
    slide1.setAttribute("src", "./assets/microsoft-365-slide-1-small.avif");
    slide2.setAttribute("src", "./assets/pc-games-pass-slide-2-small.avif");
  }
});

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

window.addEventListener("resize", function () {
  if (this.window.innerWidth < 640) {
    slide1.setAttribute("src", "./assets/microsoft-365-slide-1-small.avif");
    slide2.setAttribute("src", "./assets/pc-games-pass-slide-2-small.avif");
  } else {
    slide1.setAttribute("src", "./assets/microsoft-365-slide-1.avif");
    slide2.setAttribute("src", "./assets/pc-games-pass-slide-2.jpg");
  }
});

/**
 * ! For Toggling Mobile Menu
 * */
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementsByClassName("menu-icon")[0];
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

/**
 * ! For Mobile Menu Dropdown list
 * */
const dropdowns = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", () => {
    // rotating the arrow
    let arrow = dropdowns[i].childNodes[1];
    arrow.classList.toggle("rotate-180");
    // toggling the dropdown list
    let dropdownList = dropdowns[i].nextElementSibling;
    dropdownList.classList.toggle("hidden");
  });
}
