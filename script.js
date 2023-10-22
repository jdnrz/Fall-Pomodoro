let timer;
let minutes = 0; // Set the initial minutes to 0
let seconds = 0; // Set the initial seconds to 0
let isTimerSet = false;
let initialDuration = 25; // Initial duration set to 25 minutes

// Audio element
const timerSound = document.getElementById('timerSound');
const timerContainer = document.querySelector('.timer-container');

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
  updateTimerDisplay(); // Display the initial time as "0:00"
});

function startTimer() {
  if (!timer) {
    if (isTimerSet) {
      updateTimerDisplay();
      timerContainer.classList.add('playing'); // Add the background image class
      timer = setInterval(updateTimer, 1000);
      document.getElementById('startButton').disabled = true;
    }
  }
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    document.getElementById('startButton').disabled = false;
    timerContainer.classList.remove('playing'); // Remove the background image class
  }
}

function resetTimer() {
  pauseTimer();
  minutes = isTimerSet ? initialDuration : 0; // Reset to the initial duration if not set
  seconds = 0;
  isTimerSet = false;
  updateTimerDisplay();
  timerContainer.classList.remove('playing'); // Remove the background image class
}

function changeTimer(newMinutes) {
  minutes = newMinutes;
  seconds = 0;
  isTimerSet = true;
  initialDuration = newMinutes; // Store the new duration as the initial duration
  updateTimerDisplay();
  document.querySelector('.timer-container').classList.remove('hidden'); // Show the timer container
  document.querySelector('.button-container').classList.remove('hidden'); // Show the buttons
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    timer = null;
    document.getElementById('startButton').disabled = false;
    timerSound.play(); // Play the sound
    resetTimer(); // Reset the timer
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

function updateTimerDisplay() {
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}
