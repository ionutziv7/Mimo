let name = "Hallen";

console.log("Hello " + name + "!");
console.log(`Hello ${name}!`);

// `` backtick characters
let category = `pie`;
let cake = `Apple ${category}`;
console.log(cake);

let quantity = 20;
let price = 10;
let cost = `Total cost: ${quantity * price}`;
console.log(cost);

//When calling a function, we leave out the paranthesis () if we're passing a string literal as an argument to the function.
const greetings = (name) => {
    return `Bonjour ${name}!`;
}
console.log(greetings(`John`));

let old = `Superman`;
let latest = `Startrek`;
let movies = `${old}, ${latest}`;
console.log(movies);

let ticketPrice = 500;
let persons = 5;
let total = `Total cost: ${ticketPrice * persons}`;
console.log(total);

const likedBy = person => {
    return `Movie liked by: ${person}`;
}
console.log(likedBy`John`);