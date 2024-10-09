/*
https://www.codewars.com/kata/5813d19765d81c592200001a

Description:
Don't give me five!
In this kata you get the start number and the end number of a region and
should return the count of all numbers except numbers with a 5 in it. The start
and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers
can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you
will find an easy pure mathematics solution.
*/

function dontGiveMeFive(start, end) {
  let zähler = 0; // Zähler für die Zahlen

  for (let i = start; i <= end; i++) {
    // Schleife von start -> inkl. end

    if (!i.toString().includes("5")) {
      // wenn i nicht 5 enthält -> zähler ++
      zähler++;
    }
  }
  return zähler;
}

console.log(dontGiveMeFive(1, 9)); //  8
console.log(dontGiveMeFive(4, 17)); //  12
console.log(dontGiveMeFive(3, 26)); //  21
console.log(dontGiveMeFive(-2, 18)); //  19
console.log(dontGiveMeFive(11, 46)); //  32

/* 
Info zu Code:

1. Funktion "dontGiveMeFive" nimmt zwei Parameter (start und end).

2. Zählervariable wird erstellt (zähler), um Anzahl der gültigen Zahlen zu speichern.

3. for-Schleife iteriert von start bis einschließlich end.

4. toString()-Methode wandelt Zahlen und String um und überprüft mit
   .includes()-Methode ob "5" in aktueller Zahl i enthalten ist.
   Wenn keine "5" enthalten, wird zähler erhöht mit ++ 

5. zum Schluss wird die Anzahl der gültigen Zahlen zurückgegeben (return zähler).
*/
