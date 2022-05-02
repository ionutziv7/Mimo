class Employee {
    constructor(company) {
        this.company = company;
    }
}

class Developer extends Employee {
    constructor(company, language) {
        super(company);
        this.language = language;
    }
}

var dev = new Developer('Mimo', 'JS');
console.log(dev);

class Computer {
    constructor(gigabytes) {
        this.gigabytes = gigabytes;
    }
    turnOn() {
        console.log('On');
    }
}

class Laptop extends Computer {}

