const btns = document.querySelectorAll(".btn");
const audio = document.getElementById("audio");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    let txt = item.textContent;
    let src = `./sounds/${txt}.mp3`;
    audio.src = src;
    audio.play();
  });
});
