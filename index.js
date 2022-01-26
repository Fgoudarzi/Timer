
const inputElm = document.getElementById("txtBox");
const startBtnElm = document.getElementById("startBtn");
const stopBtnElm = document.getElementById("stopBtn");
let intervalId;
startBtnElm.addEventListener("click", start);
stopBtnElm.addEventListener("click", stop);

function start() {
  let seconds;
  seconds = +inputElm.value;
  if (seconds <= 0) {
    inputElm.value = "Time Over!";
  } else {
    seconds = seconds - 1;
    inputElm.value = seconds;
    intervalId = setTimeout(() => {
      start();
    }, 1000);
  }
}
function stop() {
  clearTimeout(intervalId);
}
