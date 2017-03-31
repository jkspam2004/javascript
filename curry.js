/* Curry function

Currying is the process of transforming a function with many arguments into the 
same function with less arguments.
Currying can help you make higher order factories.
Currying can help you avoid continuously passing the same variables.
Currying can memorize various things including state.


*/

function msg(msg1, msg2) {
    return function (msg2) {
        return msg1 + " " + msg2 + ".";
    }
}

var hello = msg("Hello");
console.log(hello("June"));

