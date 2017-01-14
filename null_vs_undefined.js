/*
    "undefined" means this value does not exist. typeof returns "undefined"
    No one and no thing has ever assigned a value to the variable 
    aka it's never been touched

    "null" means this value exists with an empty value. typeof returns "object"
    Assign variable to null to unset it.
*/

var variable;

if (variable == null) {
     // do something 
}

// equivalent to below block

if (variable === undefined || variable === null){
    // Do stuff
    // Note: this will throw ReferenceError if variable is not declared, but we
    // want to catch this
}

// avoid using typeof..

if(typeof variable === 'undefined' || variable === null){
    // Do stuff
}


// http://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null


