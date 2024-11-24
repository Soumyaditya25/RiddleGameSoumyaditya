// Full Riddles and Answers
const riddles = [
  { question: "1. What has hands but can’t clap?", answer: "clock", hint: "I help you keep track of time, but I don’t have arms." },
  { question: "2. I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle", hint: "It gives light." },
  { question: "3. The more of this there is, the less you see. What is it?", answer: "darkness", hint: "It's the opposite of light." },
  { question: "4. What has keys but can't open locks?", answer: "piano", hint: "It's a musical instrument." },
  { question: "5. What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m", hint: "Think about letters." },
  { question: "6. The more you take, the more you leave behind. What am I?", answer: "footsteps", hint: "I grow with every step you take." },
  { question: "7. What has to be broken before you can use it?", answer: "egg", hint: "Think of breakfast." },
  { question: "8. I’m not alive, but I can grow. I don’t have lungs, but I need air. What am I?", answer: "fire", hint: "It's dangerous but gives warmth." },
  { question: "9. What can travel around the world while staying in the corner?", answer: "stamp", hint: "It's small and helps with letters." },
  { question: "10. I have cities but no houses, forests but no trees, rivers but no water. What am I?", answer: "map", hint: "You can fold me." }
];

// Variables
let currentLevel = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;

// Selectors
const instructionsModal = document.getElementById("instructions-modal");
const gameArea = document.getElementById("game-area");
const progressBar = document.getElementById("progress");
const scoreDisplay = document.getElementById("score-display");
const timerElement = document.getElementById("timer");
const riddleText = document.getElementById("riddle-text");
const riddleAnswer = document.getElementById("riddle-answer");
const submitAnswer = document.getElementById("submit-answer");
const useHint = document.getElementById("use-hint");
const hintText = document.getElementById("hint-text");
const endModal = document.getElementById("end-modal");
const endTitle = document.getElementById("end-title");
const endImage = document.getElementById("end-image");
const endMessage = document.getElementById("end-message");
const restartGame = document.getElementById("restart-game");
const exitEndGame = document.getElementById("exit-end-game");

// Music Control
const toggleMusicButton = document.getElementById('toggle-music');
const backgroundMusic = document.getElementById('background-music');

// Start Game
document.getElementById("start-game").addEventListener("click", startGame);

// Functions
function startGame() {
  instructionsModal.style.display = "none";
  endModal.style.display = "none";
  gameArea.style.display = "block";

  // Reset all variables and UI elements
  currentLevel = 0;
  timeLeft = 60;
  score = 0;
  updateScore();
  resetTimer();
  loadRiddle();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    progressBar.style.width = `${(timeLeft / 60) * 100}%`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame(false);
    }
  }, 1000);
}

function loadRiddle() {
  const riddle = riddles[currentLevel];
  riddleText.textContent = riddle.question;
  riddleAnswer.value = "";
  hintText.style.display = "none";
  hintText.textContent = "";
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function submitRiddleAnswer() {
  const answer = riddleAnswer.value.trim().toLowerCase();
  if (answer === riddles[currentLevel].answer) {
    score += 10;
    updateScore();
    timeLeft += 10; // Add 10 seconds after each correct answer
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    progressBar.style.width = `${(timeLeft / 60) * 100}%`;

    if (currentLevel < riddles.length - 1) {
      currentLevel++;
      loadRiddle();
    } else {
      endGame(true);
    }
  } else {
    alert("Incorrect! Try again.");
  }
}

function showHint() {
  score -= 5;
  updateScore();
  hintText.style.display = "block";
  hintText.textContent = riddles[currentLevel].hint;
}

function endGame(won) {
  clearInterval(timerInterval);
  gameArea.style.display = "none";
  endModal.style.display = "block";

  endTitle.textContent = won ? "Congratulations!" : "Game Over!";
  endImage.src = won ? "win.png" : "lose.png";
  endMessage.textContent = won ? "You've escaped the loop!" : "You ran out of time!";
}

// Event Listeners for Music Control
toggleMusicButton.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = 'Pause Music';  // Change button text to "Pause Music"
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = 'Play Music';   // Change button text to "Play Music"
  }
});

// Event Listeners for Game Actions
submitAnswer.addEventListener("click", submitRiddleAnswer);
useHint.addEventListener("click", showHint);
restartGame.addEventListener("click", startGame);
exitEndGame.addEventListener("click", () => location.reload());
