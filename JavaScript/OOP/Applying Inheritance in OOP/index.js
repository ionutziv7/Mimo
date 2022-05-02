// We use inheritance to make our code efficient. 
// Through inheritance, objects receive methods from other objects or classes.
// Inheritance lets us create objects that have different properties and 
// behaviors without coding each one from scratch.
// One way to apply inheritance is by creating objects from other objects.
// If we need more methods for an object, we can set them directly.

var person1 = {
    greet: function() {
        console.log('Hi!');
    }
};
var person2 = {
    greet: function() {
        console.log('Hi!');
    }
};
var template = {
    greet: function() {
        console.log('Hi!');
    }
};
var person = Object.create(template);
console.log(template);
console.log(person);

var car = {
    startEngine: function() {
        console.log('Start engine');
    }
};
var hybrid = Object.create(car);
hybrid.charge = function() {
    console.log('Using fuel to charge battery');
}
hybrid.startEngine();
hybrid.charge();

var player = {
    name: "Player",
    greet: function() {
        console.log('Ready to play');
    }
};
var player1 = Object.create(player);
console.log(player1);
player1.name = 'Jill';
console.log(player1);

var cars = {
    displayMiles: function() {
        console.log('0 miles driven');
    }
}
var porsche = Object.create(cars);
var bmw = Object.create(cars);
var jaguar = Object.create(cars);
porsche.displayMiles();
bmw.displayMiles();
jaguar.displayMiles();