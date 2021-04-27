//const moment = require("moment");
const display = document.querySelector("#timer");
const left = document.querySelector("#left");
left.innerText = "-";

const setTimer = (seconds) => {
  const finish = moment().add(seconds, "seconds");
  let timer = setInterval(() => {
    display.classList.remove("red");
    if (moment().isSameOrAfter(finish)) {
      clearInterval(timer);
      display.innerText = "TIME IS UP!";
      display.classList.add("red");
      left.innerText = "0";
    } else {
      display.innerText = moment().format("hh:mm:ss");
      left.innerText = (--seconds).toString();
    }
  }, 1000);
};

const buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", () => setTimer(5));
buttons[1].addEventListener("click", () => setTimer(10));
