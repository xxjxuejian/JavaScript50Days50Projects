const rangeEl = document.querySelector("#range");
const labelEl = rangeEl.nextElementSibling;
const labelParent = labelEl.parentElement;

rangeEl.addEventListener("input", (e) => {
  labelEl.textContent = e.target.value;
  const labelParentWidth = parseInt(
    getComputedStyle(labelParent).getPropertyValue("width")
  );
  let v = e.target.value;
  // range的value在0-100之间滚动，对应着label的left在0-300px之间滚动
  let left = scale(v, e.target.min, e.target.max, 0, labelParentWidth);

  labelEl.style = `left:${left}px;transform: translateX(-50%);`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
