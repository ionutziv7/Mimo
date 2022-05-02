// Classes are templates for objects
/*
var book100 = {
    author: "Wiliam Shakespeare",
    title: "The Da Vinci Code"
};
console.log(book100);

 Class names start with an uppercase letter
 Before creating a new object property, we need a special keyword: this.
 We add the this keyword to refer to the object being created.
 To create a new object property, we need to use the keyword this, folowed by a period and the property name. 
*/
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
var book1 = new Book("Wiliam Shakespeare", "The Da Vinci Code");
var book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!");
console.log(book1);
console.log(book2);

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}
var Bebita = new Animal("Bebita", "Tabby cat");
var Pruncusor = new Animal("Pruncusor", "Tabby cat");
console.log(Bebita);
console.log(Pruncusor);