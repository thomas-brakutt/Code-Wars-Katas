/*
https://www.codewars.com/kata/56747fd5cb988479af000028

Description:
You are going to be given a word. Your job is to
return the middle character of the word. If the word's
length is odd, return the middle character. If the word's
length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript
you may get slightly more than 1000 in some test cases
due to an error in the test cases). You do not need to
test for this. This is only here to tell you that you do
not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
------------------------------------------ */

function getMiddle(str) {
  const length = str.length; // Bestimmt die Länge des Wortes
  const mid = Math.floor(length / 2); // Berechnet den Index des mittleren Zeichens
  return length % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
  // Wenn die Länge ungerade ist, gib das mittlere Zeichen zurück
  // Wenn die Länge gerade ist, gib die beiden mittleren Zeichen zurück
}

console.log(getMiddle("test")); // es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"

/*
### Erklärung:
1. Die Funktion getMiddle nimmt einen String = str
als Parameter.

2. Die Länge des Strings wird mit str.length ermittelt.

3. Der Index des mittleren Zeichens wird mit
Math.floor(length / 2) berechnet.

4. Es wird überprüft, ob die Länge des Strings gerade
oder ungerade ist:
- Bei gerader Länge (length % 2 === 0) werden die beiden
mittleren Zeichen zurückgegeben.
- Bei ungerader Länge wird das mittlere Zeichen
zurückgegeben.

5. Schließlich wird das Ergebnis zurückgegeben.*/

/*
Alternative:

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

*/
