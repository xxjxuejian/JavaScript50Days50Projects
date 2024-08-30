const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", fetchJoke);

function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
      // console.log(data);
    });
}

// 未理解
// async function fetchJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", config);
// }
