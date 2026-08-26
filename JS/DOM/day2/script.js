const bulb = document.querySelector(".bulb");

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  if (bulb.classList.toggle("lightbulbUp")) {
    btn.textContent = "Off";

    bulb.style.borderColor =
      bulb.style.borderColor == "yellow" ? "red" : "yellow";

    let bgImage = "./images/" + Math.ceil(Math.random() * 40) + ".jpeg";

    bulb.style.backgroundImage = `url("${bgImage}")`;

    console.log(bgImage);
    bulb.style.visibility = "visible";
    changeTimeout(3000);
  } else {
    btn.textContent = "On";
    bulb.style.visibility = "hidden";
    changeTimeout(500);
  }
});
let frequency = setTimeout(() => {
  btn.click();
}, 1000);

function changeTimeout(timeout) {
  clearInterval(frequency);
  frequency = setTimeout(() => {
    btn.click();
  }, timeout);
}
