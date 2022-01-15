let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// Function to generate a random integer between 0 to 9
let generateTarget = () => {
   return Math.floor(Math.random() * 10);
}

// Function to determine which guess is closest to the target number
let getAbsoluteDistance = (numberOne, numberTwo) => {
  return Math.abs(numberOne - numberTwo);
}

/*
let compareGuesses = (humanGuess, computerGuessNumber, secretTargetNumber) => {
  let humanDiff = Math.abs(secretTargetNumber - humanGuess);
  let computerDiff = Math.abs(secretTargetNumer - computerGuessNumber);
  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }  
}
*/

const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9) {
      alert('Invalid entry, must be in range 0 to 9. Modulus value will be used.');
  }
  const correctedHuman = human % 10;
  if (getAbsoluteDistance(correctedHuman, target) <= getAbsoluteDistance(computer, target)) {
      return true;
  } else {
      return false;
  }
}

let updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

let advanceRound = () => {
  currentRoundNumber++;
}
