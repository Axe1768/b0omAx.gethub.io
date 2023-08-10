const year = document.getElementById("year")

const date = new Date()
year.innerHTML = date.getFullYear()

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

// fetch("/api/getServerTime")
//   .then(response => response.json())
//   .then(data => updateClock(data.serverTime));




let arr = []
const red = Math.floor(Math.random() * 256) + 1;
const green = Math.floor(Math.random() * 256) + 1;
const blue = Math.floor(Math.random() * 256) + 1;

arr.push(red, green, blue);

console.log('%cWelcome Axel.com', `color: rgb(${red}, ${green}, ${blue}); font-size: 18px; font-weight: bold;`);








