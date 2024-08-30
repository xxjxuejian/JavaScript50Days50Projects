const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
