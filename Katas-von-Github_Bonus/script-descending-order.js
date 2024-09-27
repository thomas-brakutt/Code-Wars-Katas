/*
https://www.codewars.com/kata/5467e4d82edf8bbf40000155

Description:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(111)); // 111
console.log(descendingOrder(15)); // 51
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321

/*
Erklärung:
1.
parseInt()
: Wandelt den String zurück in eine Zahl.
2.
n.toString()
: Wandelt die Zahl in einen String um.
3.
.split('')
: Teilt den String in ein Array von Ziffern.
4.
.sort()
: Sortiert das Array.
5.
: Sortiert das Array rückwärts.
6.
.join('')
: Verbindet die Ziffern wieder zu einem String.

*/

/*
Allternative:

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
*/
