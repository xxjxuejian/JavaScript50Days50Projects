const counters = Array.from(document.querySelectorAll(".counter"));
const targets = counters.map((item) => {
  return +item.getAttribute("data-target");
});

const increment = targets / 200;

function loadCounter() {
  counters.forEach((element, index) => {
    element.innerHTML = "0";
    const increment = Math.floor(targets[index] / 200);
    let start = 0;
    const target = targets[index];

    function update() {
      let cur = start;
      // cur += Math.ceil(increment + cur);
      cur += increment;
      start = cur;

      if (cur < target) {
        element.innerHTML = cur;
        setTimeout(update, 20);
      } else {
        element.innerHTML = target;
      }
    }

    update();
  });
}

window.addEventListener("load", loadCounter);
