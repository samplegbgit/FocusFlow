const input = document.createElement("input");
input.placeholder = "New task";

const btn = document.createElement("button");
btn.innerText = "Add";

const list = document.createElement("ul");

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
