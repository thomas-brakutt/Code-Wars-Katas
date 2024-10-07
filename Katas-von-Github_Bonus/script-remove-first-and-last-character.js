/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

Description:
It's pretty straightforward. Your goal is to create a function
that removes the first and last characters of a string. You're given
one parameter, the original string. You don't have to worry about
strings with less than two characters.
*/

function removeChar(str) {
  // Entfernt das erste und das letzte Zeichen des Strings
  return str.slice(1, -1);
}

console.log(removeChar("eloquent")); // 'loquen'
console.log(removeChar("country")); // 'ountr'
console.log(removeChar("person")); // 'erso'
console.log(removeChar("place")); // 'lac'
console.log(removeChar("ooopsss")); // 'oopss'

/* 
In dieser Funktion verwenden wir die 
"slice-Methode", um den gewünschten Teil des Strings zu extrahieren.
Der Parameter 1 gibt an, dass wir ab dem zweiten Zeichen (Index 1) beginnen,
und -1 bedeutet, dass wir das letzte Zeichen ausschließen
*/
