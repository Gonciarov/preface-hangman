

describe("Hangman Game Functions", function() {

    it("should update incorrect guesses", function() {
        incorrectGuesses = 2;
        updateIncorrectGuesses();
        expect(document.getElementById("incorrect-guesses").textContent).toBe("Incorrect guesses: 2");
    });

    it("should display word correctly", function() {
        secretWord = "hangman";
        guessedLetters = ['h', 'n'];
        displayWord();
        expect(document.getElementById("word-display").textContent).toBe("h _ n _ _ _ n ");
    });

    it("should count remaining dashes", function() {
        secretWord = "hangman";
        guessedLetters = ['h', 'n'];
        const remainingDashes = countRemainingDashes();
        expect(remainingDashes).toBe(4);
    });

    it("should check game status correctly", function() {
        secretWord = "hangman";
        guessedLetters = ['h', 'a', 'n', 'g', 'm'];
        incorrectGuesses = 5;
        const resultMessageElement = document.getElementById("result-message");
        checkGameStatus();
        expect(resultMessageElement.textContent).toBe("Congratulations, you've won!");
    });

  
  
});


