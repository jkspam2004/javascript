/*
    from Jay:
    "undefined" means this value does not exist. typeof returns "undefined"
    No one and no thing has ever assigned a value to the variable 
    aka it's never been touched

    "null" means this value exists with an empty value. typeof returns "object"
    Assign variable to null to unset it.

    from Nick:
    "null" is a keyword in JS often left to explicitly mark the "emptiness" 
    (non-existence) of something BY A PROGRAMMER.  

    "undefined" is another keyword that JS internally sets to explicitly declared
    variable without an explicit value upon runtime BY THE INTERPRETER. Both of 
    these are falsey, and will work for if (!end)....HOWEVER, if you were to make
    a block that said something like this: if (end == null) and it's undefined, it
    will not trigger the block.
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


