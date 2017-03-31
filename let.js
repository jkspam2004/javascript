"use strict";

/*
var is scoped to the nearest function block and let is scoped to the nearest enclosing block 
(both are global if outside any block), which can be smaller than a function block.

Also, variables declared with let are not accessible before they are declared in their 
enclosing block.

var will let you re-declare the same variable in the same scope. 
On the other hand, let will not

http://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable
*/

let x = 3;
console.log(x); // 3

// redeclaration not allowed with let. ok with var
let me = "foo";
// let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared

var you = "foo";
var you = "bar"; // no problem

// let is block scoped
// var is function scoped


