// 所有叫做ripple-btn的按钮都要添加这个波纹效果

const rippleBtns = document.querySelectorAll(".ripple-btn");

rippleBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 以点击位置为圆心，那就是修改top,left值,而且是相对按钮来创建的圆心
    const x = e.clientX;
    const y = e.clientY;

    // button按钮的位置
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // 创建span，是一个圆形
    const rippleEl = document.createElement("span");
    rippleEl.classList.add("circle");
    // this.appendChild(rippleEl); //this指向的是window

    rippleEl.style.top = yInside + "px";
    rippleEl.style.left = xInside + "px";

    e.target.appendChild(rippleEl);

    setTimeout(() => {
      rippleEl.remove();
    }, 500);
  });
});
