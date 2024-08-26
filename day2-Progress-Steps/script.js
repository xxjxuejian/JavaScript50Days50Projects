const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circls = document.querySelectorAll(".circle");

let curActive = 1;

nextBtn.addEventListener("click", () => {
  curActive++;

  if (curActive > circls.length) {
    curActive = circls.length;
  }

  // 更新DOM
  update();
});

prevBtn.addEventListener("click", () => {
  curActive--;

  if (curActive < 1) {
    curActive = 1;
  }

  update();
});

function update() {
  // 添加/删除active类
  circls.forEach((item, index) => {
    if (index < curActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 更新按钮
  if (curActive === circls.length) {
    nextBtn.disabled = true;
  } else if (curActive === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  // 更新进度条
  let percentage = ((curActive - 1) / (circls.length - 1)) * 100;
  progress.style.width = percentage + "%";
  // console.log(percentage);
}
