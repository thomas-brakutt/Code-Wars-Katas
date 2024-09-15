/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Description:
Complete the solution so that it reverses the string
passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

----------------------------------------- */

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world")); // 'dlrow');
console.log(solution("hello")); // 'olleh');
console.log(solution("")); // '');
console.log(solution("h")); // 'h');

/*
Code erklärt:

function solution(str) {
    // Step 1. Use the split() method to return a new array
    const splitString = str.split(""); // const splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse(); // const reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

solution("hello");

*/
