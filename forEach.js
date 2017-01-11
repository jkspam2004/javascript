/* 
    forEach() - syntax: arr.forEach(callback[, thisArg]) 
    forEach method takes a callback function as input
    the callback function takes in 3 arguments: currentValue, index, and array
    forEach() executes the provided callback once for each element present in the array in ascending order.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
  //console.log(array);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
