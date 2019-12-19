console.log('hello');
console.log(__dirname);
console.log(__filename);

setTimeout(function(){
  console.log('5 sec passed')
},5000);

time=0
var timer = setInterval(function(){
time+=2
console.log(time + ' sec');
if (time>3){
  clearInterval(timer);
}
},2000)

//normal function
function sayHi(){
  console.log('Hi');
}
sayHi();

//function expression - anonymous function
var sayBye = function(){
  console.log('Bye');
}
sayBye();

//calling function
function callback(func){
  func();
}

callback(sayBye);
callback(sayHi);

//require & exporting a file
//require('./arrlength.js');  A HUGE DOUBT!! HOW IS THIS STATEMENT WORKING EVEN WHEN I DON'T EXPORT ANY FUNCTION!!!
var retrieve = require('./export');
l=[88,6.9,'meesha']
console.log(retrieve.arrlength(l));
console.log(retrieve.adder(9,4));
console.log(retrieve.areaCir(5));
console.log(retrieve.adder(retrieve.g,4));


//requiring a module 'events'
var events = require('events');
var myEventEmitter = new events.EventEmitter;

myEventEmitter.on('anEvent', function(msg){
  console.log('Event emitter says: ' +msg);
});

myEventEmitter.emit('anEvent','Your event is fired.');

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

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
