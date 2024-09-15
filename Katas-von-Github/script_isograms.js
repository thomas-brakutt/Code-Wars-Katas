/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

Description:
An isogram is a word that has no repeating letters,
consecutive or non-consecutive. Implement a function
that determines whether a string that contains only
letters is an isogram. Assume the empty string is an
isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

-------------------------------------------------- */

function isIsogram(str) {
  str = str.toLowerCase(); // Konvertiert den String in Kleinbuchstaben

  const letterSet = new Set(); // Erstelle ein leeres Set, um die Buchstaben zu speichern

  for (let i = 0; i < str.length; i++) {
    // Durchläuft jeden Buchstaben im String
    const letter = str[i];

    if (letterSet.has(letter)) {
      // Überprüfe, ob der Buchstabe bereits im Set ist
      return false; // Wenn ja, ist es kein Isogram
    }
    letterSet.add(letter); // Füge den Buchstaben zum Set hinzu
  }

  return true; // Wenn kein Buchstabe wiederholt wurde, ist es ein Isogram
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false

/*
Alternative:

1. mit for of Schleife:

function isIsogram(str) {
    str = str.toLowerCase();  // Konvertiert die Zeichenfolge in Kleinbuchstaben

    if (str.length === 0) {   // Leere Zeichenfolge ist ein Isogram
        return true;
    }

    const letterSet = new Set();  // Erstellt ein Set, um die Buchstaben zu speichern

    // Überprüft jeden Buchstaben in der Zeichenfolge
    for (let char of str) {
        // Wenn der Buchstabe bereits im Set ist, ist es kein Isogram
        if (letterSet.has(char)) {
            return false;
        }
        // Füge den Buchstaben zum Set hinzu
        letterSet.add(char);
    }

    // Wenn kein Buchstabe wiederholt wurde, ist es ein Isogram
    return true;
}

Dieser Code definiert eine Funktion
isIsogram
, die eine Zeichenfolge als Eingabe nimmt und
true
zurückgibt, wenn es sich um ein Isogram handelt, und
false, wenn nicht. Die Funktion ignoriert dabei die Groß- und 
Kleinschreibung.



2. von Code Wars:

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

*/
