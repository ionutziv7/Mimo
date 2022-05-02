// The constructor is what creates an instance. But it doesn't always need to have properties inside of it. 
// It works even when empty.
/*
class User {
    constructor() {}
    sayHi() {
        console.log("Hello!");
    }
}
var user1 = new User();
user1.sayHi();
*/

/*
Constructors are so essentials for classes that a default constructor is created 
even if we don't add it.
In this case, the user1 instance is created with a default empty constructor when we run the code.
class User {
    sayHi() {
        console.log("Hello!");
    }
}
var user1 = new User();
console.log(user1);
user1.sayHi();

Output
User {}
Hello!
*/
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hey, I'm using Mimo";
    }
    sayHi() {
        console.log("Hi, I'm " + this.name);
    }
}
var user1 = new User("Arya");
var user2 = new User("Bran");
var user3 = new User("Sansa");
var user4 = new User("Jon");
user1.isOnline = false;
user4.sayHi();
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
}
var banana = new Food("banana", 105);
console.log(banana);
var rice = new Food("rice", 50);
banana.calories = banana.calories / 2;
console.log(rice);
var pizza = new Food("pizza", 350);
console.log(pizza);
