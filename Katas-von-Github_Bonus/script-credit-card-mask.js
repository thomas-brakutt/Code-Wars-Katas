/*
https://www.codewars.com/kata/5412509bd436bd33920011bc

Description:
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/
function maskify(cc) {
  // Überprüft, ob Eingabe kürzer als 4 Zeichen ist
  if (cc.length <= 4) {
    return cc; // Wenn ja, die Eingabe zurückgeben
  }
  // Maskieren aller Zeichen außer den letzten vier
  const maskiert = "#".repeat(cc.length - 4); // Erstellt Maskierung
  const sichtbar = cc.slice(-4); // Die letzten vier Zeichen extrahieren
  return maskiert + sichtbar; // maskierte und sichtbare Teile zusammenfügen
}

// Beispiele
console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("64607935616")); // "#######5616"
console.log(maskify("1")); // "1"
console.log(maskify("")); // ""
console.log(maskify("Skippy")); // "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // "####################################man!"

/*
Diese Funktion funktioniert, indem sie die Länge der Eingabe überprüft
und entsprechend die Zeichen maskiert. Wenn die Eingabe weniger als vier Zeichen
hat, wird sie unverändert zurückgegeben. Andernfalls wird der maskierte Teil und
der sichtbare Teil zusammengefügt und zurückgegeben. */
