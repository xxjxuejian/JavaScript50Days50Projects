const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let count = 0;

let timer = setInterval(() => {
  count++;
  if (count > 99) {
    clearInterval(timer);
  }
  console.log(count);
  loadingText.innerText = `${count}%`;

  /* 
    count 在从 0 -- 100时
    30px -- 0px，
  1. blur(30px)变为blur(0px) 
    就是一个正则化
      2. 文本的opacity也变为0
  */
  bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
  loadingText.style.opacity = `${(100 - count) / 100}`;
}, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
