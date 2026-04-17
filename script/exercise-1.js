// EXERCISE 1: Guess the random number 

const guessNumberGame = () => {
    const randomNumber = 3;
    console.log(randomNumber); 

    let userGuess = 0;

    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (userGuess > randomNumber) {
            alert("Too high!");
        } else if (userGuess < randomNumber) {
            alert("Too low!");
        }
    }
    alert(`Congratulations! The number was ${randomNumber}`);
};

console.log(guessNumberGame());