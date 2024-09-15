/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Description:
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F 
-----------------------------------------------------*/

/* Diese Funktion nimmt einen Namen als Eingabe, teilt ihn in zwei Wörter und gibt die Initialen im gewünschten Format zurück.*/

function abbrevName(name) {
  const words = name.split(" "); // teilt den Namen in zwei "strings" auf

  // console.log(words); // -> Überprüfung von "words" mit .split-methode

  const initials = words[0][0].toUpperCase() + "." + words[1][0].toUpperCase();
  // Nimmt den 1. Buchstaben jedes Wortes, macht ihn groß u. fügt sie mit einem Punkt zusammen

  return initials;
}

console.log(abbrevName("Sam Harris")); // "S.H")
console.log(abbrevName("Patrick Feenan")); // "P.F"
console.log(abbrevName("Evan Cole")); // "E.C"
console.log(abbrevName("P Favuzzi")); // "P.F"
console.log(abbrevName("David Mendieta")); // D. M.
