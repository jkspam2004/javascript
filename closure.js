/*  closure
    A closure is an inner function that has access to the outer (enclosing) function's variables -
    scope chain.  3 scope chains: it has access to its own scope (varialbes defined between its curly braces),
    it has access to the outer function's variables, and it has access to the global variables
    http://javascriptissexy.com/understand-javascript-closures-with-ease/ 
*/

/* example 1 */
console.log("\nexample 1");
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
console.log("\nexample 2");
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
console.log("\nexample 3");
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner function
    // All the inner functions have access to the outer function's variable
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
            return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

var myID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
console.log(myID.getID()); // 999
myID.setID(567); // Changes the outer function's variable
console.log(myID.getID()); // 567: It returns the updated celebrityId variable

/* example 4 - closure gone awry*/
console.log("\nexample 4");
// This example is explained in detail below (just after this code box).
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        console.log(i);
        theCelebrities[i]["id"] = function ()  {
            console.log("inside i", i);
            return uniqueID + i;
        }
    }

    return theCelebrities;
}

var actionCelebs = [{ name:"Stallone", id:0 },
                    { name:"Cruise", id:0 },
                    { name:"Willis", id:0 }
                   ];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
console.log("createIdForActionCelebs is typeof " + typeof(createIdForActionCelebs)); // object

var stalloneID = createIdForActionCelebs[0];
console.log("stalloneID.id()=", stalloneID.id()); // 103
var willisID = createIdForActionCelebs[0];
console.log("willisID.id()=", willisID.id()); // 103
console.log("stalloneID.id is typeof " + typeof(stalloneID.id)); // function
console.log("stalloneID.id() is typeof " + typeof(stalloneID.id())); // number

/*
In the preceding example, by the time the anonymous functions are called, the value of i is 3 (the length of the array and then it increments). The number 3 was added to the uniqueID to create 103 for ALL the celebritiesID. So every position in the returned array get id = 103, instead of the intended 100, 101, 102.
*/


/* example 5 - fix for example 4 */
// IIFE - Immediately Invoked Function Expression (IIFE)
console.log("\nexample 5");
function celebIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            //return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            //}(); // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
        }(i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{ name: "Stallone", id: 0 },
                    { name: "Cruise", id: 0 },
                    { name: "Willis", id: 0}
                   ];

var createIdForCelebs = celebIDCreator(actionCelebs);
console.log("createIdForCelebs is typeof " + typeof(createIdForCelebs)); // number

var sID = createIdForCelebs[0];
console.log("sID.id is typeof " + typeof(sID.id)); // number
console.log("sID.id=", sID.id); // 100

var cID = createIdForCelebs[1];
console.log("cID.id=",  cID.id); // 101

