// Adding a method in a class is like creating a regular function, 
// except there's no need for the function keyword.
// This virtualPet class can't do much yet. Let's give it the ability to eat with a method.

class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(food) {
        if(food === "treats") {
            console.log("nom nom");
        } else {
            console.log("discard");
        }
    }
} 

var pet = new VirtualPet("Tom");
pet.eat();
pet.eat("treats");


class Device {
    constructor(type) {
        this.type = type;
    }
    batteryLevel() {

    }
}
var bag = new Device("flashlight");
bag.batteryLevel();

class Inventory {
    constructor(size) {
        this.size = size;
    }
    increase(unit) {
        this.size += unit;
    }
}
var dev1 = new Inventory(10);
dev1.increase(5);
console.log(dev1);