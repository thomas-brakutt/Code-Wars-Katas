/*
https://www.codewars.com/kata/554b4ac871d6813a03000035

Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("1 2 3")); // "3 1"
console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 2 -3 4 5")); // "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // "9 -5"

/*
Allternative:

1. aus dem Netz

// function highAndLow(numbers) {
//   // Die Zahlen in ein Array umwandeln
//   const numArray = numbers.split(" ").map(Number);

//   // Das höchste und das niedrigste Element finden
//   const highest = Math.max(...numArray);
//   const lowest = Math.min(...numArray);

//   // Die Ergebnisse als String zurückgeben
//   return 
//   ${highest} ${lowest}
//   ;
//   }

2. von CodeWars

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
*/
