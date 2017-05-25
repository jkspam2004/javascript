var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go());
alert(foo.baz.bar());

// What is the order of values alerted? Ans: 3, 1


var x   = 4,
    obj = {
        x: 3,
        bar: function() {
            var x = 2;
            setTimeout(function() {
                var x = 1;
                alert(this.x);
            }, 1000);
        }
    };
obj.bar();
// What value is alerted? Ans: 4 


x = 1;
function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x);
// What value is alerted? Ans: 2

function foo(a) {
    alert(arguments.length);
}
foo(1, 2, 3);
// What value is alerted? Ans: 3

var foo = function bar() {}; 
alert(typeof bar);
// what is alerted? undefined


var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
// What value is alerted? Ans: 2


function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1);
// What value? Ans: 2

Question 12/12
function foo(){}
delete foo.length;
alert(typeof foo.length);
// What is alerted? Ans: number



