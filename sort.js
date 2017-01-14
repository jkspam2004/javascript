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

/* sort by values of specified key in an object */
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

function sortByValue(a, b) {
    return a.name - b.name;
}
console.log(items.sort(sortByValue));

/*
    String comparison

    function compare(a, b) {
        if (a is less than b by some ordering criterion) {
            return -1;
        }
        if (a is greater than b by the ordering criterion) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
*/
