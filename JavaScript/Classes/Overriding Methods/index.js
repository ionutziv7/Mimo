// Overriding a method replaces the code of the method in the superclass with that of the subclass.
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swing " + this.weapon);
    }
    receiveDamage() {
        this.health = this.health - 10;
    }
}
class Wizard extends Human {
    attack() {
        super.attack();
        console.log("Zimzalabim!");
    }
    receiveDamage() {
        this.health = this.health - 5;
    }
}
var human = new Human("ax");
human.receiveDamage();
console.log(human.health);
var wizard = new Wizard("staff");
wizard.attack();
wizard.receiveDamage();
console.log(wizard.health);