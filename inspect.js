'use strict';
const util = require('util');

let input = [
    "John Chambers~Homer~Marge~Lisa",
    "John Chambers~Homer~Marge~Bart",
    "John Chambers~Homer~Marge~Maggie",
    "John Chambers~Mickey~Minnie~Pluto",
    "John Chambers~Donald~Daisy~Figuero",
];

function buildOrg(input) {
    var orgTree = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let people = line.split("~");

        let node = orgTree;
        for (let j = 0; j < people.length; j++) {
            let person = people[j];
            if (!(person in node)) {
                node[person] = {};
            }

            node = node[person]
        }
    }


    return orgTree;
}

var result = buildOrg(input);
console.log(JSON.stringify(result, null, 2)); // spacing level=2
console.log(util.inspect(result, false, null));

/*

util.inspect:
const util = require('util')

console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
console.log(util.inspect(myObject, false, null))


JSON.stringify(value[, replace[, space]]):
converts a JavaScript value to a JSON string, optionally replacing values if a
replacer function is specified, or optionally including only the specified
properties if a replacer array is specified.

JSON.parse(text[, reviver]):
parses a JSON string, constructing the JavaScript value or object described
by the string. An optional reviver function can be provided to perform a
transformation on the resulting object before it is returned.

*/

