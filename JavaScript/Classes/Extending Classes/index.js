// Superclass - a class that others inherit from 
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

class Bird extends Animal {

}
var dog = new Dog("Pug");
console.log(dog);
console.log(dog.name);
dog.eat();
dog.bark();

var bird = new Animal("Blue Jay");
bird.eat();