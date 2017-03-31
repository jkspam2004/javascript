function outer(first, second) {
    var intro = 'hello';
    function inner() {
        return intro + ' ' + first + ' ' + second;
    }
    return inner();  // return the invoked function
}

console.log(outer('sally', 'smith'));

function outtie(first) {
    var intro = 'sup';
    function innie(second) {
        return intro + ' ' + first + ' ' + second;
    }
    return innie;  // return reference to function
}

console.log(outtie('james')('doe'));

function say667() {
  // Local variable that ends up within closure
  var num = 42; // local variables kept by reference not a copy
  var say = function() { console.log(num); }
  num++;
  return say();
}
say667();
