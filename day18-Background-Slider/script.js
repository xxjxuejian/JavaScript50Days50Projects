const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeIndex = 0;
let prevIndex = activeIndex;
const n = slides.length;

// 左边减少
leftBtn.addEventListener("click", () => {
  prevIndex = activeIndex;
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = n - 1;
  }

  setBodyBg();
  setActive();
});

// 右边增加
rightBtn.addEventListener("click", () => {
  prevIndex = activeIndex;
  activeIndex++;
  if (activeIndex >= n) {
    activeIndex = 0;
  }
  setBodyBg();
  setActive();
});

function setBodyBg() {
  body.style.backgroundImage = slides[activeIndex].style.backgroundImage;
}

function setActive() {
  slides[prevIndex].classList.remove("active");
  slides[activeIndex].classList.add("active");
}
