const spans = document.querySelectorAll(".key span");
const pannel = document.querySelector(".pannel");
const tips = document.querySelector(".tips");
let pannelIsShow = false;

window.addEventListener("keydown", (e) => {
  if (!pannelIsShow) {
    tips.style.display = "none";
    pannel.style.display = "flex";
    pannelIsShow = true;
  }

  const keys = [e.key, e.keyCode, e.code];
  spans.forEach((item, index) => {
    item.textContent = keys[index];
  });
});
