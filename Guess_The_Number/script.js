let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#guessField");
const previousGusses = document.querySelector(".previousGuesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const result = document.querySelector(".lowOrHigh");
const resultContainer = document.querySelector(".result-container");

// Array to store previous guesses
let prevGuess = [];

// Number of attempts.
let attempts = 0;

// Game Status - Play (true) / Stop (flase)
let playGame = true;

if (playGame) {
	submitBtn.addEventListener("click", function (event) {
		// Preventing defualt action of submit button.
		event.preventDefault();

		let userInputValue = parseInt(userInput.value);
		validateGuess(userInputValue);
		// console.log(userInputValue);
	});
}

// Function to validate a user input (check for valid input)
function validateGuess(guess) {
	if (guess === "" || isNaN(guess) || guess < 1 || guess > 100) {
		alert("Invalid Input - Enter a valid input");
	} else {
		prevGuess.push(guess);
        attempts++;
		if (attempts >= 10) {
			displayGuess(guess);
			displayMessage(`Game Over. Random number was ${randomNumber}. `);
            endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}

// Function to check whether userInput (after validation) is greater or lower or equal to the random number.
function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`You guessed it right`);
		endGame();
	} else if (guess > randomNumber) {
		displayMessage(`Your guess is TOOO high`);
	} else {
		// guess < randomNumber
		displayMessage(`Your guess is TOOO low`);
	}
}

// Simple function to display a message (lower guess or higher guess or correct guess) and also it keep track of the attempts.
// This functon interacts with the HTML Document.
function displayMessage(message) {
    result.innerHTML = `<h3>${message}</h3>`;
}

// Simple function to print user guess, update previous guesses, and update remianing guess.
// This functon interacts with the HTML Document.
function displayGuess(guess) {
    userInput.value = "";
    previousGusses.innerHTML += `${guess} `;
    remainingGuesses.innerHTML = `${10 - attempts}`;
}

// Function to start a new game.
function newGame() {

    const newGameBtn = document.querySelector("#startOverBtn");
    newGameBtn.addEventListener('click', function(event){
        event.preventDefault();

        userInput.removeAttribute("disabled");
        userInput.value = "";
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        previousGusses.innerHTML = "";
        attempts = 0;
        remainingGuesses.innerHTML = `${10 - attempts}`;
        result.innerHTML = "";
        resultContainer.removeChild(newGameBtn);

        submitBtn.removeAttribute("disabled");

        playGame = true;
    });
}

// Function to start a end game.
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    playGame = false;

    submitBtn.setAttribute("disabled", "");

    const startOverButton = document.createElement("button");
    startOverButton.setAttribute("id", "startOverBtn");
    startOverButton.innerHTML = `Start New Game`;
    resultContainer.appendChild(startOverButton);
    newGame();
}
