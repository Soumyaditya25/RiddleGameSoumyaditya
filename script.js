// Riddles and Answers
const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano", hint: "It's a musical instrument." },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle", hint: "It gives light." },
    { question: "The more of this there is, the less you see. What is it?", answer: "darkness", hint: "It's the opposite of light." },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m", hint: "Think about letters." },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps", hint: "I grow with every step you take." },
    { question: "What has to be broken before you can use it?", answer: "egg", hint: "It's something you eat." },
    { question: "What has a neck but no head?", answer: "bottle", hint: "You might drink from it." },
    { question: "What has words but never speaks?", answer: "book", hint: "It's full of pages." },
    { question: "I’m not alive, but I can grow. I don’t have lungs, but I need air. What am I?", answer: "fire", hint: "It burns brightly." },
    { question: "What can travel around the world while staying in the corner?", answer: "stamp", hint: "It’s used for sending letters." }
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
  const actionButtons = document.getElementById("action-buttons");
  const nextLevel = document.getElementById("next-level");
  const exitGame = document.getElementById("exit-game");
  const endModal = document.getElementById("end-modal");
  const endTitle = document.getElementById("end-title");
  const endImage = document.getElementById("end-image");
  const endMessage = document.getElementById("end-message");
  const restartGame = document.getElementById("restart-game");
  const exitEndGame = document.getElementById("exit-end-game");
  
  // Start Game
  document.getElementById("start-game").addEventListener("click", startGame);
  
  // Functions
  function startGame() {
    instructionsModal.style.display = "none";
    gameArea.style.display = "block";
    currentLevel = 0;
    score = 0;
    updateScore();
    loadRiddle();
    startTimer();
  }
  
  function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60 - currentLevel * 5;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame("lose");
      }
    }, 1000);
  }
  
  function loadRiddle() {
    riddleAnswer.value = "";
    hintText.style.display = "none";
    riddleText.textContent = riddles[currentLevel].question;
    updateProgressBar();
  }
  
  submitAnswer.addEventListener("click", () => {
    const userAnswer = riddleAnswer.value.toLowerCase();
    if (userAnswer === riddles[currentLevel].answer) {
      score += 10;
      currentLevel++;
      if (currentLevel >= riddles.length) {
        endGame("win");
      } else {
        clearInterval(timerInterval);
        actionButtons.style.display = "block";
        updateScore();
      }
    } else {
      endGame("lose");
    }
  });
  
  useHint.addEventListener("click", () => {
    hintText.textContent = `Hint: ${riddles[currentLevel].hint}`;
    hintText.style.display = "block";
    score -= 5; // Deduct points for using a hint
    updateScore();
  });
  
  nextLevel.addEventListener("click", () => {
    actionButtons.style.display = "none";
    loadRiddle();
    startTimer();
  });
  
  exitGame.addEventListener("click", () => {
    endGame("exit");
  });
  
  function updateProgressBar() {
    const progressPercentage = ((currentLevel + 1) / riddles.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  
  function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
  }
  
  function endGame(result) {
    clearInterval(timerInterval);
    gameArea.style.display = "none";
    endModal.style.display = "block";
    
    if (result === "win") {
      endTitle.textContent = "Congratulations!";
      endMessage.textContent = `You solved all the riddles! Final Score: ${score}`;
      endImage.src = "win.png"; // Ensure this path is correct or use a placeholder image
    } else if (result === "lose") {
      endTitle.textContent = "Better Luck Next Time!";
      endMessage.textContent = `You couldn't solve the riddle in time. Final Score: ${score}`;
      endImage.src = "lose.png"; // Ensure this path is correct or use a placeholder image
    } else if (result === "exit") {
      endTitle.textContent = "Game Over!";
      endMessage.textContent = `You exited the game. Final Score: ${score}`;
      endImage.src = "exit.png"; // Placeholder or any image you like
    }
  }
  
  restartGame.addEventListener("click", () => {
    endModal.style.display = "none";
    startGame();
  });
  
  exitEndGame.addEventListener("click", () => {
    endModal.style.display = "none";
    instructionsModal.style.display = "block";
  });
  