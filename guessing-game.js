function guessingGame() {
  const randomNum = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let gameOver = false;
  
  return function guess(num) {
    if (gameOver) return "The game is over, you already won!";
    guessCount++;

    if (num === randomNum) {
      gameOver = true;
      return `You win! You found ${randomNum} in ${guessCount} guesses.`;
    }

    if (num < randomNum) return `${num} is too low!`;
    if (num > randomNum) return `${num} is too high!`;  
  };

}

module.exports = { guessingGame };
