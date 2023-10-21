let timer;
let minutes = 25;
let seconds = 0;

function startTimer(duration) {
  if (timer) {
    clearInterval(timer);
  }

  minutes = duration;
  seconds = 0;

  updateTimerDisplay();

  timer = setInterval(updateTimer, 1000);
  disableButtons();
}

function endTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
  enableButtons();
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    enableButtons();
  }
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    timer = null;
    enableButtons();
  } else {
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }

    updateTimerDisplay();
  }
}

function changeTimer(newMinutes) {
    if (!timer) {
      minutes = newMinutes;
      seconds = 0;
      updateTimerDisplay();
    }
  }

function updateTimerDisplay() {
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}
