const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// 主题颜色的切换
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const timer = new Date();
  const month = timer.getMonth(); //返回一个 0 到 11 的整数值：0 代表一月份，1 代表二月份，
  const day = timer.getDay(); //返回一个具体日期中一周的第几天，0 表示星期天
  const date = timer.getDate(); //根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。

  const hours = timer.getHours(); //getHours 返回一个 0 到 23 之间的整数值。
  // hours 范围在[0,23]，但是钟表只有[0,12],所以13就是1,14就是2
  const hoursForClock = hours >= 13 ? hours % 12 : hours;

  const minutes = timer.getMinutes(); //getMinutes 返回一个 0 到 59 的整数值。
  const seconds = timer.getSeconds(); //该方法返回一个 0 到 59 的整数值。

  // hours范围[0,23],,[0,12]都是am,[13,23]是pm
  const ampm = hours >= 12 ? "PM" : "AM";

  // 比如 秒针旋转是 360deg, 但是秒的范围是0-59，即0秒对应0度，1秒对应6度，59秒对应354度，60秒对应360度
  // 根据 当前秒数计算旋转度数
  // secondEl.style.transform = `rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
  hourEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

  minuteEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;

  secondEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  // 分针，0-59，对应也是

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
