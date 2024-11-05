function updateClock() {
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Soatni yangilash
  hoursElem.textContent = hours;
  minutesElem.textContent = minutes;
  secondsElem.textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();
