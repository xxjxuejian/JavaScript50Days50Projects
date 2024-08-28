const loadingText = document.querySelector(".loading-text");

let count = 0;

let timer = setInterval(() => {
  count++;
  if (count > 99) {
    clearInterval(timer);
  }
  console.log(count);
  loadingText.innerText = `${count}%`;
  loadingText.style.opacity = (100 - count) / 100;
}, 30);

// window.addEventListener("load", () => {
//   let timer = setInterval(() => {
//     count++;
//     if (count > 99) {
//       clearInterval(timer);
//     }
//     console.log(count);
//     loadingText.innerText = `${count}%`;
//     loadingText.style.opacity = (100 - count) / 100;
//   }, 30);
// });

// 0-100的数字转为1-0之间
/* 
0 -> 1
10 -> 0.9
20 -> 0.8
100 -> 0
*/
// function changeToRange(number) {
//   (100 - number) / 10;
// }
