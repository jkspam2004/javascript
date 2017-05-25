
var fruitObj = {
    apples: 3,
    pears: 5,
    oranges: 10
}

var key_exists = fruitObj.hasOwnProperty("bananas");
var object_keys = Object.keys(fruitObj);
var apple_count = fruitObj.apples;
var apple_count2 = fruitObj["apples"];

console.log(fruitObj); // { apples: 3, pears: 5, oranges: 10 }
console.log("hasOwnProperty:", key_exists); // false
console.log("keys:", object_keys); // [ 'apples', 'pears', 'oranges' ]

// use hasOwnProperty to check if key exists in object
// hasOwnProperty does not check down the object's prototype chain like "in" does

console.log(apple_count);
console.log(apple_count2);

