



// Initial variables
let secretWord = "hangman";
let guessedLetters = [];
let incorrectGuesses = 0;

// Function to update incorrect guesses display
function updateIncorrectGuesses() {
    const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");
    incorrectGuessesDisplay.textContent = `Incorrect guesses: ${incorrectGuesses}`;
}

// Function to update the word display with underscores and guessed letters
function displayWord() {
    const wordDisplay = document.getElementById("word-display");
    let displayedWord = "";
    
    for (const letter of secretWord) {
        if (guessedLetters.includes(letter)) {
            displayedWord += letter + " ";
        } else {
            displayedWord += "_ ";
        }
    }
    
    wordDisplay.textContent = displayedWord;
}

// Function to count the number of dashes not filled with letters
function countRemainingDashes() {
    let remainingDashes = 0;
    
    for (const letter of secretWord) {
        if (!guessedLetters.includes(letter)) {
            remainingDashes++;
        }
    }
    
    return remainingDashes;
}

function displayHangmanFigure() {
    const hangmanFigure = document.getElementById("hangman-figure");
    
    // Adjust this part to update the hangman figure display
    const hangmanStates = [
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |           </p>
          <p> |           </p>
          <p> |           </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |           </p>
          <p> |           </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |         | </p>
          <p> |           </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |        /| </p>
          <p> |           </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |        /|\\ </p>
          <p> |           </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |        /|\\ </p>
          <p> |        /  </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |        /|\\ </p>
          <p> |        / \\ </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p> |         | </p>
          <p> |         O </p>
          <p> |        /|\\ </p>
          <p> |        / \\ </p>
          <p>_|_          </p>
        </pre>
        `,
        `
        <pre>
          <p> ___________ </p>
          <p>|_|_          </p>
        </pre>
        `
    ];
    
    
    
    
    hangmanFigure.innerHTML = hangmanStates[incorrectGuesses];
}

function checkGameStatus() {
    const resultMessage = document.getElementById("result-message");
    
    if (countRemainingDashes() === 0) {
        resultMessage.textContent = "Congratulations, you've won!";
    } else if (incorrectGuesses >= 6) {
        resultMessage.textContent = "Game over. The word was: " + secretWord;
    }
}

// Function to handle player's guess
function handleGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();
    
    if (guess.length !== 1 || guessedLetters.includes(guess)) {
        // Invalid guess or already guessed
        guessInput.value = "";
        return;
    }
    
    if (secretWord.includes(guess)) {
        guessedLetters.push(guess);
    } else {
        incorrectGuesses++;
        displayHangmanFigure();
    }
    
    guessInput.value = "";
    displayWord();
    updateIncorrectGuesses();
    checkGameStatus();
    console.log(countRemainingDashes());
}



// Event listener for guess button click
document.getElementById("guess-button").addEventListener("click", handleGuess);

// ...


// Initial setup when the page loads
displayWord();


