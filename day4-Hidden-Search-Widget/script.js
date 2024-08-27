const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");

btnEl.addEventListener("click", () => {
  inputEl.classList.toggle("active");
  inputEl.focus();
});
