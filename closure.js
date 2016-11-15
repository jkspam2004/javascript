/*  closure
    A closure is an inner function that has access to the outer (enclosing) function's variables -
    scope chain.  3 scope chains: it has access to its own scope (varialbes defined between its curly braces),
    it has access to the outer function's variables, and it has access to the global variables
    http://javascriptissexy.com/understand-javascript-closures-with-ease/ 
*/

/* example 1 */
function showName (firstName, lastName) { 
    var nameIntro = "Your name is ";

    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {         
        return nameIntro + firstName + " " + lastName; 
    }

    return makeFullName(); // return invoked function
} 

console.log(typeof(showName)); // function

var name = showName("Dolly", "Parton"); // Your name is Dolly Parton
console.log(name); // string

/* example 2 */
function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";

    // this inner function has access to the outer function's variables, including the paramete
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }

    return lastName; // return function
}
console.log(typeof(celebrityName)); //function

var funname = celebrityName("Tom"); // At this juncture, the celebrityName outer function has returned.
console.log(typeof(funname)); // function

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
var name2 = funname("Hanks"); // This celebrity is Tom Hanks
console.log(name2); // string

/* example 3 */
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it
            return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
}

var myID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
console.log(myID.getID()); // 999
myID.setID(567); // Changes the outer function's variable
console.log(myID.getID()); // 567: It returns the updated celebrityId variable 

