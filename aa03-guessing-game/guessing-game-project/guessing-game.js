const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

function askRange () {
    rl.question("Min Number: ", min => {
        rl.question("Max Number: ", max => {
            console.log("I'm thinking of a number between " + min + " and " + max + ".");
            secretNumber = randomInRange(min, max);
            // console.log(secretNumber)
            askGuess();
        })

    });
};

function randomInRange (min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

function checkGuess (num) {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else if (num === secretNumber) {
        console.log('Correct!')
        return true;
    }
};

function askGuess () {

    rl.question("Enter a guess: ", num => {
        let guessedNumber = checkGuess(Number(num));

        if (guessedNumber === false) {
            console.log('Guess again.');
            return askGuess();
        } else if (guessedNumber === true) {
            console.log('You win!')
            rl.close();
        }
    });
};

askRange()
