/*
https://www.codewars.com/kata/5672a98bdbdd995fad00000f

Description:
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "rock")); //'Draw!'
console.log(rps("scissors", "scissors")); // 'Draw!'
console.log(rps("paper", "paper")); // 'Draw!'

// Bonus :-) :
console.log(rps("scissors", "paper")); // 'Player 1 won!'
console.log(rps("scissors", "rock")); // 'Player 2 won!'
console.log(rps("paper", "rock")); // 'Player 1 won!'

/*

Allternative:

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

*/
