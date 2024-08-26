const panels = document.querySelectorAll(".panel");
let activePanel = document.querySelector(".panel.active");

panels.forEach((item) => {
  item.addEventListener("click", () => {
    // removeActiveClasses();
    if (activePanel !== item) {
      activePanel.classList.remove("active");
      item.classList.add("active");
      activePanel = item;
    }
  });
});

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
