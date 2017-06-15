/* Array.reduce()
   Applies a function against an accumulator and each element in the array 
  (from left to right) to reduce it to a single value

   arr.reduce(callback, [initialValue]);
   callback function:
   function(accumulator, currentValue, currentIndex, origArray) {
       return accumulator
   }

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example
 */
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function(allNames, name) { 
    allNames[name] = (allNames[name] + 1) || 1;
    return allNames;
}, {}); // <-- initial value set to empty object {}

console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


