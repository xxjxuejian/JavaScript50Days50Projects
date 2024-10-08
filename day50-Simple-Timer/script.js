const timerEl = document.querySelector(".timer");
const totalSeconds = 60;
let currentSeconds = totalSeconds;
timerEl.textContent = formatTime(currentSeconds);

// 根据秒数格式化时间戳
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainSeconds = seconds % 60;

  // 格式化00:00
  let minStr = "0" + minutes; //01,012
  let secStr = "0" + remainSeconds;
  // console.log(minStr.slice(minStr.length - 2), secStr.slice(secStr.length - 2));
  return `${minStr.slice(minStr.length - 2)}:${secStr.slice(
    secStr.length - 2
  )}`;
}

const timer = setInterval(run, 1000);
function run() {
  currentSeconds--;
  if (currentSeconds <= 0) {
    clearInterval(timer);
    reset();
  }

  timerEl.textContent = formatTime(currentSeconds);
}

function reset() {
  timerEl.textContent = "00:00";
}
