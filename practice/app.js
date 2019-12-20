console.log('hello');
console.log(__dirname);     // prints path upto current directory
console.log(__filename);   // prints path upto current filename

//**********NORMAL FUNCTION*********//
function sayHi(){
  console.log('Hi');
}
sayHi();

function timing(){
  console.log('5 sec passed - checkpoint');
}
// wait for 5 sec and then run the timing function once
setTimeout(timing,5000);
// wrong! - we need to pass reference of the func rather than calling the func itself.
// setTimeout(timing(), 8000);

//**********ANONYMOUS FUNCTION*********//

// wait for 7 sec and then run the anonymous function once
setTimeout(function(){
  console.log('7 sec passed - checkpoint');
},7000);

// function expression - assign an anonymous function to a variable
var sayBye = function(){
  console.log('Bye');
}
sayBye();

count=0
// run the setInterval function after every 2 sec infinitely or until the clearInterval(in our case)
var timer = setInterval(function(){
count+=2;
console.log(count + ' sec have passed');
if (count>4){clearInterval(timer);}
},2000);

//*********CALLING FUNCTION********//
function callback(func){
  func();
}

callback(sayBye);
callback(sayHi);

//*********REQUIRING FUNCTIONS DEFINED IN DIFFERENT FILE OR MODULE********//
// case 1: you require func's from a module inside node_modules/dependencies --> require('<module-name>')
// case 2 : you require func's from a file that you've created --> require('./<path-of-file>')

//require('./arrlength.js');  A HUGE DOUBT!! HOW IS THIS STATEMENT WORKING EVEN WHEN I DON'T EXPORT ANY FUNCTION!!!

// CASE 2
var retrieve = require('./export');
l=[88,6.9,'meesha']
console.log(retrieve.arrlength(l));
console.log(retrieve.adder(9,4));
console.log(retrieve.areaCir(5));
console.log(retrieve.adder(retrieve.g,4));

//***********DEFINING(on) AND EMITTING(emit) EVENTS**********//
// CASE 1
var events = require('events');
// craete an object of the class EventEmitter defined in the event module
var myEventEmitter = new events.EventEmitter;

// define an EventEmitter ON an event that will fire a function when emitted/fired
myEventEmitter.on('anEvent', function(msg){
  console.log('Event emitter says: ' +msg);
});

// emit the function defined on an event with the passed msg
myEventEmitter.emit('anEvent','Your event is fired.');

class Person extends events.EventEmitter{
    constructor(name){
      // super is used to invoke parent class constructor. --- Now, What do you mean by that? -__-
      // super is like superman, Idk who he is and why he exists but he surely saves the planet/code.
        super();                                              // UGHHH!! WHY DO WE NEED SUPER HERE!??????
        this.name = name;
    }
}

// creating objects of class Person
let james = new Person('james');
let mary = new Person('mary');
let ruy = new Person('ruy');
let people = [james, mary, ruy];

people.forEach(person => {
    person.on('speak', msg => {
        console.log(person.name + ' said : ' + msg);
    });
});

/*people.forEach(function(person){
    person.on('speak', function(msg){
        console.log( person.name + ' said : ' + msg);
    });
});*/

james.emit('speak', 'hey dudes');
