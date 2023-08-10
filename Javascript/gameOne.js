const d = new Date()
const hour = document.getElementById("p");
const minutes = document.getElementById("p2");
const second = document.getElementById("p3");
hour.innerHTML = d.getHours();
minutes.innerHTML = d.getMinutes();
second.innerHTML = d.getSeconds();
function updateClock() {
  const d = new Date();
  hour.innerHTML = d.getHours();
  minutes.innerHTML = d.getMinutes();
  second.innerHTML = d.getSeconds();
}

setInterval(updateClock, 1000);

fetch("/api/getServerTime")
  .then(response => response.json())
  .then(data => updateClock(data.serverTime));







// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const messageElement = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageElement.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    messageElement.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
  } else if (guess < targetNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else {
    messageElement.textContent = "Too high! Try again.";
  }
}