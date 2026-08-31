// const five = document.querySelector("#five");
// const main = document.querySelector("main");

// five.addEventListener("click", (e, options) => {
//   console.log(e.target.innerHTML);
//   console.log(options);
// });

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const main = document.querySelector("main");
const start = document.querySelector("button");
const box = document.querySelector(".box");
const timer = document.querySelector("#timer");
const scorer = document.querySelector("#scorer");
const overlay = document.querySelector("#overlay");

let timerValue = 0;
let score = 0;
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};
const randomBox = () => {
  box.style.backgroundColor = randomColor();

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

start.addEventListener("click", () => {
  clearInterval(interval);
  start.textContent = "Game is On";

  start.disabled = true;
  var interval = setInterval(() => {
    box.style.display = "block";
    timer.textContent = ++timerValue;
    randomBox();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    overlay.classList.add("block");

    setTimeout(() => {
      overlay.classList.remove("block");
      timerValue = 0;
      score = 0;
      timer.textContent = 0;
      scorer.textContent = 0;
      box.style.display = "none";
      start.textContent = "Start";
      start.disabled = false;
    }, 3000);
  }, 10000);
});

box.addEventListener("click", () => {
  scorer.textContent = ++score;
  box.style.display = "none";
});
