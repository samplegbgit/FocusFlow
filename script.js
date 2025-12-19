const input = document.createElement("input");
input.placeholder = "New task";

const btn = document.createElement("button");
btn.innerText = "Add";

const list1 = document.createElement("ul");

document.getElementById("app").append(input, btn, list);

btn.onclick = () => {
  if (!input.value) return;
  const li = document.createElement("li");
  li.innerText = input.value;
  list.appendChild(li);
  input.value = "";
};
document.querySelectorAll("li").forEach(li => {
  li.onclick = () => {
    li.style.textDecoration = "line-through";
  };
});

const resetBtn = document.createElement("button");
resetBtn.innerText = "Reset Timer";
document.getElementById("app").appendChild(resetBtn);

resetBtn.onclick = () => {
  time = 25 * 60;
  timer.innerText = "25:00";
};
let time = 25 * 60;
let running = false;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("tasks");

startBtn.onclick = () => {
  running = !running;
  startBtn.innerText = running ? "Pause" : "Start";
};

setInterval(() => {
  if (!running) return;
  time--;
  let m = Math.floor(time / 60);
  let s = time % 60;
  timer.innerText = `${m}:${s < 10 ? "0" : ""}${s}`;
}, 1000);

addBtn.onclick = () => {
  if (!input.value) return;
  const li = document.createElement("li");
  li.innerText = input.value;
  li.onclick = () => li.classList.toggle("done");
  list.appendChild(li);
  input.value = "";
};
