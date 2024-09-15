const loveMeEl = document.querySelector(".loveMe");
const timesEl = document.querySelector(".times");

// 上一次点击事件
let prevClickTime = 0;
// 双击次数
let timesClicked = 0;

// 自己定义双击的时间间隔
loveMeEl.addEventListener("click", (e) => {
  if (prevClickTime === 0) {
    prevClickTime = Date.now();
  } else {
    // 两次点击间隔小于800ms，认为是双击点击
    if (Date.now() - prevClickTime < 800) {
      // 双击操作：创建爱心
      createHeart(e);

      // 恢复状态
      prevClickTime = 0;
    } else {
      prevClickTime = Date.now();
    }
  }
});

function createHeart(e) {
  // e.clientX是点击事件相对于视口的位置
  // e.target.offsetTop 是目标元素距离视口的顶部距离
  // console.log(e.clientX, e.target.offsetLeft);

  // 创建爱心元素
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // 只在盒子内部创建爱心，所以需要作差计算
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMeEl.appendChild(heart);
  timesEl.innerHTML = ++timesClicked;

  // 1s以后移除爱心
  setTimeout(() => heart.remove(), 1000);
}
