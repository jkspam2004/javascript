/* 
   arr.sort();
   arr.sort(compareFunction);

   If compareFunction is not given, elements are sorted by converting them to 
   strings and comparing strings in Unicode code point order.

   If compareFunction is given, the array elements are sorted according to the 
   return value of the compare function

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort    
*/


var arr = [2, 1, 21, 10, 35];
console.log(arr.sort()); // [1, 10, 2, 21, 35] in unicode '10' comes before '2'

// now let's sort the numbers numerically

/* return results in ascending order */
function compare_asc(a, b) {
    return a - b;
}
console.log(arr.sort(compare_asc)); // [1, 2, 10, 21, 35]

/* return results in descending order */
function compare_desc(a, b) {
    return b - a;
}
console.log(arr.sort(compare_desc)); // [1, 2, 10, 21, 35]
