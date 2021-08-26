var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

//Counter
var counter = 1;
const size = carouselImages[0].clientWidth;
// console.log(size);
carouselSlide.style.transform = "translateX(" + -size + "px)";
