/*
https://www.codewars.com/kata/57cff961eca260b71900008f

Description:
Given an array of numbers, check if any of the numbers are the CHARACTER CODES for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

// CHARACTER CODES =
// a = 97
// e = 101
// i = 105
// o = 111
// u = 117

function isVow(a) {
  // Object erstellen mit den "Character Codes"
  const charCodes = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };

  for (let i = 0; i < a.length; i++) {
    const code = a[i];

    // Ist die Zahl code in unserem Object charCodes?
    if (charCodes[code] !== undefined) {
      a[i] = charCodes[code];
    }
  }
  return a;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
// Result: [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116, 123, 114, 113, 120, 106,]

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
// Result: ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]

/*
Allternative:

return a.map(function (code) {
    if (charCodes[code] !== undefined) {
      return charCodes[code];
    } else {
      return code;
    }
  });
}

*/
