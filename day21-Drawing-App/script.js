const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let painting = false;

function startPainting(e) {
  painting = true;
  draw(e);
}

function endPainting() {
  painting = false;
  ctx.beginPath(); // 重置路径
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = 5; // 线条宽度
  ctx.lineCap = "round"; // 线条端点
  ctx.strokeStyle = "black"; // 线条颜色

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// 监听鼠标事件
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mousemove", draw);
