class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swings " + this.weapon);
    }
}
class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
    }
    attack() {
        super.attack();
        console.log(this.warCry);
    }
}
var human = new Human("axe");
human.attack();
var warrior = new Warrior("sword", "Barritus!");
warrior.attack();
var alexander = new Warrior("sword", "Alala!");
var leonidas = new Warrior("spear", "Molon labe!");
alexander.attack();
leonidas.attack();