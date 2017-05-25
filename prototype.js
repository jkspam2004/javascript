'use strict';
/*
Object Prototypes

As we have seen, we can make Objects very conveniently using Object Constructors. 
There is one drawback with the method we have shown you so far. Everything added to 
this in our constructor will be duplicated 1 for 1 into each new instance we create.

*/
function Player(name) {
    this.name = name;
    this.score = 0;
    this.victory = function(){
        console.log(this.name + " won with " + this.score + " points!");
    }
}

let Oscar = new Player("Oscar");
let Eli = new Player("Eli");
Oscar.victory();
Eli.victory();

/*
Oscar and Eli both have unique name and score properties. If Eli's score goes to 100, 
Oscar's score stays at 0. However, it's not just the properties that get copied, the 
victory method gets copied into each instance as well. At this point, with two Player 
instances, we have two identical victory methods stored in memory. That might not seem
like much of a problem now, but let's see how that scales. Say we had a 60 line function 
in the Player class and made 100 instances. We now have 6000 lines of code stored in memory 
when all you need is 60.
*/

/*
The .prototype object
We want to store the functions a single time, then give each of our instances a reference 
or pointer to those functions so they can all use them. This is what the .prototype property 
lets us do. When we make an object constructor it automatically get a prototype property 
added to it. This prototype is an object and acts as a place to store common information 
that all instances of that object can access.

What if we wanted to have a count of Player instances that we could access from any 
instance. We could just make a global variable and remember to increment it whenever we 
make a new instance, but this is bad form. Instead, we can add a property .playerCount to 
the Player.prototype and increment it whenever we make a new instance of Player. This 
way all information about Player is contained within the constructor, and we have access 
to it from any instance Player.
*/

// object constructor
function Player2(name){
    this.name = name;
    this.score = 0;
    Player2.prototype.playerCount += 1;
}
// prototype method
Player2.prototype.victory = function(){
    console.log(this.name + " won with " + this.score + " points!");
}
// prototype property
Player2.prototype.playerCount = 0;

// first instance instantiation
var Amy = new Player2("Amy");
console.log(Amy.playerCount)                 //OUTPUT: '1'
console.log(Player2.prototype.playerCount)   //OUTPUT: '1'

// second instance instantiation
var George = new Player2("George");
console.log(George.playerCount)           //OUTPUT: '2'
console.log(Amy.playerCount)              //OUTPUT: '2'

// George.playerCount and Amy.playerCount are both referencing Player2.prototype.playerCount
console.log(Player2.prototype.playerCount)   //OUTPUT: '2'

/*
In the above code, both Oscar and Eli still have unique name and score. Now instead of 
also having their own victory method, they each have a reference to the victory method that 
is stored in the Player2.prototype object. They also have a reference to a property playerCount 
that holds the total of all Player instances. No matter how many instances of Player we make, 
we will never duplicate the victory method code. Also, the playerCount property of any instance
will always be correct.
*/

/*
A better approach would be to create a getter method for your private property; all this 
method does is return the value of the private variable. This way you can access the 
private variable from the prototype method, but you can't update that variable.
*/

function mySecret(){
    var dontChangeMe =  "secret";
    this.dontChangeMe = function(){
        return dontChangeMe;
    }
}
mySecret.prototype.get_secret = function(){
    console.log(this.dontChangeMe());
}

let secret = new mySecret(); 
secret.get_secret();


