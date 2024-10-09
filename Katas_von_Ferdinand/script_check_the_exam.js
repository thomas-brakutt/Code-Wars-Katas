/*
https://www.codewars.com/kata/5a3dd29055519e23ec000074

Description:
The first input array is the key to the correct answers to an exam,
like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array
of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for
each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

*/

/*
- Arrays vergleichen
- wenn Antwort richtig: +4 Pkt
- wenn Antwort falsch: -1 Pkt
- wenn keine Antwort = 0 Pkt
*/

function checkExam(array1, array2) {
  let punkte = 0; // für´s Punkte ausrechnen

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      punkte += 0; // keine Antwort: 0 Pkt
    } else if (array1[i] === array2[i]) {
      punkte += 4; // richtige Antwort: 4 Pkt
    } else {
      punkte -= 1; // falsche Antwort: -1 Pkt
    }
  }
  if (punkte < 0) {
    punkte *= -0;
  }
  return punkte;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // Result: 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // Result: 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // Result: 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // Result: 0

/*

Allternative für "return":

return punkte < 0 ? 0 : punkte;  -> Stelle sicher, dass die Punktzahl nicht negativ ist
    
Erklärung:

1. Bedingung:
punkte < 0                     –>  Hier wird überprüft, ob der Wert von punkte kleiner als 0 ist.

2. Ternärer Operator: ? und :  –> ist der ternäre Operator, der eine verkürzte Form einer if-else-Anweisung
                                  darstellt. Er hat die folgende Struktur:
                               -> Wenn die Bedingung (in diesem Fall punkte < 0) wahr ist,
                                  wird der Wert vor dem : zurückgegeben (in diesem Fall 0).
                               -> Wenn die Bedingung falsch ist, wird der Wert nach dem : zurückgegeben
                                  (in diesem Fall punkte).

3. Rückgabewert: Das Ergebnis dieser Überprüfung wird dann zurückgegeben. Wenn punkte also negativ ist,
   wird 0 zurückgegeben. Andernfalls wird der aktuelle Wert von punkte zurückgegeben.

Zusammenfassung:
Dieser Code stellt sicher, dass der Rückgabewert niemals negativ ist. Wenn
punkte negativ ist, wird 0 zurückgegeben; andernfalls wird der aktuelle Wert von
punkte zurückgegeben.




Erklärung Code:
1. Initialisierung: Die Punktzahl wird zu Beginn auf 0 gesetzt.
2. Schleife: Eine for-Schleife durchläuft beide Arrays gleichzeitig.
3. Bedingungen: - Wenn die Antwort des Schülers leer ist (""), wird 0 Punkte hinzugefügt.
                - Wenn die Antwort korrekt ist, werden 4 Punkte hinzugefügt.
                - Wenn die Antwort falsch ist, wird 1 Punkt abgezogen.
4. Negative Punktzahl: Am Ende wird überprüft, ob die Punktzahl negativ ist. Wenn ja, wird 0 zurückgegeben.

*/
