function toggleMode() {
  document.body.classList.toggle("dark");
}

let goal = 10000;
let raised = 2500;

function updateCounter() {
  document.getElementById("raised").innerText = raised;
  document.getElementById("goal").innerText = goal;
}

function donate(amount) {
  raised += amount;
  updateCounter();
}

window.onload = updateCounter;
