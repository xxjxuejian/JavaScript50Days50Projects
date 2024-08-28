const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");

// 滚动事件也可以考虑使用节流hanshu
window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
  // 定义基准高度
  const triggerBottom = (window.innerHeight / 5) * 4;

  // 判断每一个盒子距离视口顶部的高度，即top值
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop <= triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
