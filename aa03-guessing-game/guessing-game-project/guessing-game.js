// ## Phase I: Too High? Too Low? Who knows.

// Begin by creating a folder called `guessing-game-project`. Open the folder in
// VSCode. Inside of that folder create a `guessing-game.js` file. This is the file
// where we will do all of the coding.

// Begin by initializing a variable in the global scope named `secretNumber` to any
// positive integer. Later we will program this variable to be assigned at random,
// but for now we'll hard-code a value that we can test for quickly.
let secretNumber = 20;
// ### checkGuess

// Define a function named `checkGuess` that accepts a number as an argument. It
// should compare that argument against the global `secretNumber`. It should have
// the following behavior:

// - when the argument is larger than `secretNumber`, it should print 'Too high.'
//   and return `false`
// - when the argument is smaller than `secretNumber`, it should print 'Too low.'
//   and return `false`
// - when the argument is equal to `secretNumber`, it should print 'Correct!' and
//   return `true`
function checkGuess (number) {
    if (number > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (number < secretNumber) {
        console.log('Too low.');
        return false;
    } else if (number === secretNumber) {
        console.log('Correct!')
        return true;
    }
};
 console.log(checkGuess(50));
 console.log(checkGuess(13));
 console.log(checkGuess(18));
 console.log(checkGuess(20));

// Let's take a moment to verify that our code is working as intended. Make a few
// test calls to `checkGuess` in the global scope. Be sure to use a range of
// numbers so we can verify that it behaves properly in all three scenarios. You'll
// want to `console.log` the return values of `checkGuess` since it should return
// booleans. Run your code with `node guessing-game.js`. When you are positive that
// your function is working, remove the test calls from your file.

// ### askGuess

// Since we will be taking user input during gameplay, we'll need to do some
// standard setup for Node's `readline` module. Reference the [readline
// docs][readline-doc] to create an interface for input and output that we will
// use. To stay organized, we recommend that you import the module and create the
// interface at the tippy top of your file.

// Define a function named `askGuess`. The method should use the `readline`
// module's `question` method to ask the user to 'Enter a guess: '. If you need a
// refresher on how to use this method, check out the [question
// docs][question-doc]. Once the user enters their number, the `checkGuess`
// function should be called with their number as an argument and the interface
// should be [closed][close-doc].

// When accepting user input, there is a very important nuance to take into
// account. When the user enters their guess it will be interpreted as a string of
// numeric characters and not an actual number type! Depending on how you wrote
// your `checkGuess` function, this could be disastrous because:

// ```javascript
// console.log(42 === "42"); // false
// ```

// To overcome this issue, we should explicitly turn their guess into a number
// _before_ we pass it into `checkGuess`. You can do this by calling the `Number`
// function. Here's an example of `Number` in action:

// ```javascript
// let str = "42";
// console.log(42 === Number(str)); // true
// ```

// Test your `askGuess` by calling it once in the global scope. Then run your
// program a few times, entering different numbers. After trying a single guess,
// you will have to run the program again. Be sure to include an attempt with a
// correct guess by entering the `secretNumber` value that you hard-coded.

// Once you have verified that the user's guess is being properly checked, let's
// work on having the function ask the user for another guess if they are
// incorrect. Refactor the `askGuess` method with some conditional logic. Recall
// that the `checkGuess` function returns a boolean - very convenient! Here is how
// the `askGuess` function should flow:

// - check the user's guess
//   - if it is correct, print out 'You win!' and close the interface
//   - if it is incorrect, call `askGuess` again

// > You may find it a bit startling that you can reference the `askGuess` function
// > from within the `askGuess` function. That is, you can a reference a function
// > from within itself! This self-referential mechanism is leveraged quite
// > frequently in programming. We will return to this concept in later lessons.

// Run your program and test it out, being sure that you have a single call to
// `askGuess` in the global scope so the game can begin. Woohoo! We now have our
// minimal viable product (MVP) version of the game.

// **Before moving onto the next phase, ask a TA for a code review.**

// [readline-doc]: https://nodejs.org/docs/latest-v18.x/api/readline.html
// [question-doc]: https://nodejs.org/docs/latest-v18.x/api/readline.html#rlquestionquery-options-callback
// [close-doc]: https://nodejs.org/docs/latest-v18.x/api/readline.html#rlclose
