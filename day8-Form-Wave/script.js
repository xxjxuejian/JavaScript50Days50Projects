const labels = document.querySelectorAll(".form-control label");

labels.forEach((item) => {
  item.innerHTML = item.innerText
    .split("")
    .map((item, index) => {
      return `<span style='transition-delay:${index * 50}ms'>${item}</span>`;
    })
    .join("");
});
