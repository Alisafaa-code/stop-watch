const timerEl = document.querySelector("[data-timer]");
const startButtonEl = document.querySelector("[data-start]");
const pauseButtonEl = document.querySelector("[data-pause]");
const resetButtonEl = document.querySelector("[data-reset]");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function startTimer() {
     if (isRunning) return;
     isRunning = true;
     startTime = Date.now() - elapsedTime;

     timerInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          timerEl.textContent = formatTime(elapsedTime);
     }, 10);
}

function formatTime(elapsedTime) {
     const milliseconds = Math.floor((elapsedTime % 1000) / 10);
     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
     const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
     return (
          (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
          ":" +
          (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
          ":" +
          (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
          "." +
          (milliseconds > 9 ? milliseconds : "0" + milliseconds)
     );
}
function pauseTimer() {
     clearInterval(timerInterval);
     isRunning = false;
}
function resetTimer() {
     clearInterval(timerInterval);
     elapsedTime = 0;
     timerEl.textContent = "00:00:00";
     isRunning = false;
}

startButtonEl.addEventListener("click", startTimer);
pauseButtonEl.addEventListener("click", pauseTimer);
resetButtonEl.addEventListener("click", resetTimer);
