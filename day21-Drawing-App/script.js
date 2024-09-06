const canvas = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const sizeEl = document.getElementById("size");

const addBtn = document.getElementById("increase");
const subBtn = document.getElementById("decrease");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let painting = false;
let color = colorEl.value; //#000000 十六机制形式的
let lineWidth = +sizeEl.textContent;
let startX = undefined;
let startY = undefined;

// 每一次绘制的时候获取颜色和笔的粗细
function startPosition(e) {
  painting = true;

  color = colorEl.value;
  lineWidth = +sizeEl.textContent;
  ctx.lineWidth = lineWidth; // 线条宽度
  ctx.strokeStyle = color; // 线条颜色

  startX = e.offsetX;
  startY = e.offsetY;

  ctx.beginPath();
}

function endPosition() {
  painting = false;

  startX = undefined;
  startY = undefined;
}

// 只有鼠标按下，移动，才会触发绘制，只是单纯的鼠标移动是没有效果的
function draw(e) {
  if (!painting) return;

  ctx.moveTo(startX, startY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  startX = e.offsetX;
  startY = e.offsetY;
}

// 监听鼠标事件
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseout", endPosition);

// 增加笔刷大小
addBtn.addEventListener("click", () => {
  lineWidth += 1;
  sizeEl.textContent = lineWidth;
});

// 减少笔刷大小
subBtn.addEventListener("click", () => {
  if (lineWidth > 1) {
    // 防止笔刷大小小于1
    lineWidth -= 1;
    sizeEl.textContent = lineWidth;
  }
});

// 清除画布
clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 如果需要保持背景颜色为白色：
  // ctx.fillStyle = "#fff";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// moveTo()用来设置起点，把笔移动到canvas中的哪一个左边处

// e.clientX , e.offsetX, offsetLeft
