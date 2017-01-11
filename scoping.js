/*   variable scoping and hoisting 
     http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/ 
*/


/*
    Variable Hoisting
    All variable declarations are hoisted (lifted and declared) to the top of the function, if defined in a function, or the top of the global context, if outside a function.

    It is important to know that only variable declarations are hoisted to the top, not variable initialization or assignments (when the variable is assigned a value).
*/

/* example 1 */
console.log("\nexample 1");
function showName() {
    console.log ("First Name: " + name);
    var name = "Ford";
    console.log ("Last Name: " + name);
}

showName();
// First Name: undefined
// Last Name: Ford

// The reason undefined prints first is because the local variable name was hoisted to the top of the function
// Which means it is this local variable that get calls the first time.
// This is how the code is actually processed by the JavaScript engine:

/* example 2 */
console.log("\nexample 2");
function showName2() {
    var name; // name is hoisted (note that is undefined at this point, since the assignment happens below)
    console.log ("First Name: " + name); // First Name: undefined

    name = "Ford"; // name is assigned a value

    // now name is Ford
    console.log ("Last Name: " + name); // Last Name: Ford
}


/*  Function Declaration Overrides Variable Declaration When Hoisted
    Both function declaration and variable declarations are hoisted to the top of the containing scope. And function declaration takes precedence over variable declarations (but not over variable assignment). As is noted above, variable assignment is not hoisted, and neither is function assignment. As a reminder, this is a function assignment: var myFunction = function(){}.
Here is a basic example to demonstrate: */

/* example 3 */ 
console.log("\nexample 3");
// Both the variable and the function are named myName
var myName;
function myName () {
    console.log ("Rich");
}

// The function declaration overrides the variable name
console.log(typeof myName); // function

/* example 4 */
console.log("\nexample 4");
// But in this example, the variable assignment overrides the function declaration
// This is the variable assignment (initialization) that overrides the function declaration.
var myName2 = "Richard"; 
function myName2 () {
    console.log ("Rich");
}

console.log(typeof myName2); // string 

/* example 5 */
console.log("\nexample 5");
// It is important to note that function expressions, such as the example below, are not hoisted.
var myName = function () {
    console.log ("Rich");
} 
