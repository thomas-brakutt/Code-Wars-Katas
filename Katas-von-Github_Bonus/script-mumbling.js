/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

Description:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  return s
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum("ZpglnRxqenU")); //  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); //  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")); //  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")); //  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")); //  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

/*

Erklärung:
s.split('')
// Teilt den Eingabestring in ein Array von einzelnen Buchstaben.

.map((char, index) => ...)
//  Iteriert über jedes Zeichen und seinen Index.
//  Für jedes Zeichen wird:
    - der Buchstabe in Großbuchstaben umgewandelt (char.toUpperCase())
    - der Buchstabe in Kleinbuchstaben wiederholt (char.toLowerCase().repeat(index)),
      wobei die Anzahl der Wiederholungen dem Index entspricht.

.join('-')
// verbindet die formatierten Buchstaben mit einem Bindestrich.

*/

/*
Allternative:

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

*/
