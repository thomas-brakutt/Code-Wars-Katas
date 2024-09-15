/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata
(but not y).

The input string will only consist of lower case 
letters and/or spaces.

----------------------------------------------------- */

function getCount(str) {
  const vowels = "aeiou"; // Definiert die Vokale in einer Variablen
  let count = 0; // Zähler für die gefundenen Vokale

  for (let i = 0; i < str.length; i++) {
    // Durchläuft jeden Charakter im String

    if (vowels.includes(str[i])) {
      // Überprüft, ob der Charakter ein Vokal ist
      // => Erklärung dazu ganz unten
      count++; // Erhöht den Zähler
    }
  }
  return count; // Gib die Anzahl der Vokale zurück
}

console.log(getCount("abracadabra")); //  5
console.log(getCount("holymoly")); //  2
console.log(getCount("ist doch alles scheiße")); //  7

/*
Alternativen:

1. mit for-of Schleife:

function getCount(str) {
  
  const vowels = 'aeiou';   // Definiert die Vokale in Variable
  let count = 0;        // Zähler

  // Durchläuft jeden Charakter im String
  for (let char of str) {
      // Überprüft, ob der Charakter ein Vokal ist
      if (vowels.includes(char)) {
          count++;
      }
  }
  return count;   // Gibt die Anzahl der Vokale zurück
}

------------------------------

2. von code Wars:

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

Erklärung für Codezeile:

if (vowels.includes(str[i])) {
      count++; }

-> vowels.includes(str[i])

Hier wird überprüft, ob ein bestimmter Buchstabe
(der an der Position "i" in der Zeichenkette "str"
steht) in der Variablen ("vowels" (mit den Vokalen)) enthalten ist.

-> str[i] bezieht sich auf das Zeichen an der Position "i" 
in der Zeichenkette "str".


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
