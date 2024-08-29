const openEl = document.getElementById("open");
const closeEl = document.getElementById("close");
const container = document.querySelector(".container");
const circle_container = document.querySelector("circle-container");

openEl.addEventListener("click", () => {
  container.classList.add("show-nav");
});

closeEl.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
