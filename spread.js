/* Spread operator
The spread syntax allows an expression to be expanded in places where multiple
arguments (for function calls) or multiple elements (for array literals) or
multiple variables (for destructuring assignment) are expected.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
*/

/* spread in function calls */

function myFunction(x, y, z) { 
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
    // x: 0, y: 1, z: 2
}
var args = [0, 1, 2];
myFunction(...args);


function myFunction2(v, w, x, y, z) { 
    console.log(`v: ${v}, w: ${w}, x: ${x}, y: ${y}, z: ${z}`);
    // v: -1, w: 0, x: 1, y: 2, z: 3
}
var args = [0, 1];
myFunction2(-1, ...args, 2, ...[3]);

var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d); // 1970-01-01T08:00:00.000Z

/* spread in array literals */

var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
console.log(lyrics);
// ["head", "shoulders", "knees", "and", "toes"]

/* copy an array */

var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

/*
Rest syntax looks exactly like spread syntax, but is used for destructuring
arrays and objects. In a way, rest syntax is the opposite of spread syntax:
spread 'expands' an array into its elements, while rest collects multiple
elements and 'condenses' them into a single element. 
*/
