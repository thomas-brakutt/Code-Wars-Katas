/*
https://www.codewars.com/kata/56dec885c54a926dcd001095

Description:
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
----------------------------------------------- */

function opposite(number) {
  return number * -1;
}

console.log(opposite(1)); // -1

console.log(opposite(0)); // 0

console.log(opposite(4.25)); // -4.25

console.log(opposite(3.3333333)); // -3.3333333

console.log(opposite(-12525220.3325)); // 12525220.3325

console.log(opposite(-5)); // 5
