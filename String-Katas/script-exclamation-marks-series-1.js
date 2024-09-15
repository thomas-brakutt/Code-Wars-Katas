/* 
https://www.codewars.com/kata/57fae964d80daa229d000126

Description:
Remove an exclamation mark from the end of a string.
For a beginner kata, you can assume that the input data is
always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
--------------------------------------------------------- */

function remove(string) {
  if (string.endsWith("!")) {
    // Überprüft, ob der String mit einem Ausrufezeichen endet.

    return string.slice(0, -1);
    // wenn "true" -> entfernt das letzte Ausrufezeichen
  }
  return string;
  // wenn kein Ausrufezeichen am Ende, dass "string" ausführen
}

console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi!!"
console.log(remove("!Hi")); // "!Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi! Hi"
console.log(remove("Hi")); // "Hi"
