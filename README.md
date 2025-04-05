🔗Riddle Odyssey🧩

Riddle Odyssey is an interactive riddle-solving game built using HTML, CSS, and JavaScript. 
The game challenges players to solve riddles within a decreasing time limit across levels, with each level getting progressively harder.
It's a fun way to test your logic, quick thinking, and problem-solving skills.

📌Project Overview:-

Project Name: Riddle Odyssey
Technologies Used: HTML, CSS, JavaScript
Key Features:
Timer-based gameplay with decreasing time limits.
Progress bar to track the level.
Score system with hints that deduct points.
Responsive design for seamless play on any device.

🎮How the Game Works:-

Levels and Riddles:
The game has levels.
Each level presents a riddle that the player must solve before the timer runs out.
Time decreases by 5 seconds with each level, starting at 60 seconds.

💡Hints:

Players can use a hint if they get stuck.
Using a hint deducts points from the player's score.

Winning and Losing:

If all riddles are solved, the player wins and is shown a congratulatory message.
If time runs out or an incorrect answer is submitted, the player loses and sees an encouraging message.

Score System:

Correct answers give 10 points.
Using a hint deducts 5 points.

Restart and Exit Options:

Players can restart the game or exit after winning or losing.

🕹️ How to Play:-

Start the game by clicking the Start Game button.
Read the riddle and type your answer in the input field.
Submit your answer by clicking the Submit Answer button.
Use a hint if needed, but note it deducts points!
Progress through all 5 levels to win.

🌐Technical Implementation:-

HTML
Structure:

A modal for the instructions screen.
Main game area with riddle display, input field, buttons for submitting answers, and using hints.
End screen modal for displaying results (win/lose messages).

CSS
Styling:

A clean and responsive design that adapts to mobile, tablet, and desktop screens.
A progress bar for visualizing the player's progress.
Buttons and modals styled to enhance the user experience.

JavaScript
Game Logic:

Riddles are stored in an array of objects, each with a question, answer, and hint.
Levels are tracked with a currentLevel variable.
Timer functionality ensures decreasing time limits per level.
Hint usage deducts points dynamically.
Winning or losing triggers respective modals with messages.

Key Functions:

startGame(): Initializes the game and sets the first riddle.
startTimer(): Starts the countdown timer for each level.
loadRiddle(): Loads the current level's riddle.
submitAnswer(): Validates the player's answer.
useHint(): Displays a hint and deducts points.
endGame(): Handles win/lose scenarios and displays appropriate messages.
restartGame(): Resets the game to level 1.

💻 Code Explanation:

Riddles and Timer Logic:

Riddles are stored in an array with properties for the question, answer, and hint.
The timer decreases as the level increases, adding a layer of challenge.

Dynamic Score Updates:

The score increases by 10 for correct answers and decreases by 5 for hints.
The score is displayed in real-time on the screen.

Progress Tracking:

A progress bar visually represents the player's journey through the levels.
The width of the progress bar increases with each level.

Responsive Design:

Media queries ensure the game looks good on all devices.

Restart and Exit Options:

Buttons allow players to either restart the game or exit at any time.

Future Improvements:-

Add more levels and riddles.
Include a leaderboard to showcase top scores.
Add sound effects for correct answers, wrong answers, and timer countdown.
