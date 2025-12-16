let time = 25 * 60;
const timer = document.getElementById("timer");
const btn = document.querySelector("button");
let running = false;

btn.onclick = () => {
  running = !running;
  btn.innerText = running ? "Pause" : "Start";
};

setInterval(() => {
  if (!running) return;

  time--;
  let m = Math.floor(time / 60);
  let s = time % 60;
  timer.innerText = `${m}:${s < 10 ? "0" : ""}${s}`;
}, 1000);
