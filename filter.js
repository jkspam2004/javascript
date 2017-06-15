
let numbers = [1, 2, 3, 5, 6];

let odd = numbers.filter(function(el) {
    return el % 2 === 1;
});

let even = numbers.filter(function(el) {
    return el % 2 === 0;
});

console.log(odd); // [1, 3, 5]
console.log(even); // [2, 6]

