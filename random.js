var d = new Date();
console.log(d);
var newstr = d.toLocaleTimeString().replace(/:\d{2}\s/,' ');
console.log(newstr);

var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';


console.log(arr); // [ 'a', 'b', foo: 'c' ]
console.log(arr.length); // 2
console.log(arr[0]); // a
console.log(arr[1]); // b
console.log(arr[2]); // undefined
console.log(arr.foo); // c
console.log(arr['foo']); // c

