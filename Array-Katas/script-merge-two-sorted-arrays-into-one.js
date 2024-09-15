/*
Description:
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!
------------------------------------------------------------ */

function mergeArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2); //// Kombiniert die beiden Arrays
  // console.log(mergedArray);  // <- checken ob alles richtig so

  const sortedArray = [...new Set(mergedArray)];
  // Spread-Operator (...) mit Set -> entfernt doppelte Werte und gibt sie in einem Array heraus
  // console.log(sortedArray); // <- check ob alles geklappt hat

  return sortedArray.sort((a, b) => a - b);
  // .sort sortiert mit "(a,b) => a  - b)" aufsteigend die Werte
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


/*
Allternaive:

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
  
*/