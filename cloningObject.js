/* Cloning an object with .assign() */

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


/* Deep cloning
For deep cloning, we need to use other alternatives because Object.assign()
copies property values. If the source value is a reference to an object, it only
copies that reference value.

*/

let  obj1 = { a: 0 , b: { c: 0} };
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;
obj1.b.c = 4;
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0} }


/* Merging objects
*/

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

