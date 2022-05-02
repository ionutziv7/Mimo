const NEW_PRESENT = "Trousers";
const WARDROBE = ["Shirt"];
WARDROBE.push(NEW_PRESENT);

console.log(WARDROBE);

const MY_CLOTHES = {
    shirts: 1,

};
MY_CLOTHES.shirts++;
console.log(MY_CLOTHES.shirts);

// Another difference between the three types of variables is that
// we can store data in a var variable before we even declare it.
// This process is called "hoisting". Keep in mind this is not a good practice.

zodiacSign = "Aries";
var zodiacSign;
console.log(zodiacSign);

//this will result in an error
// car = "Renault";
// const car;
// console.log(car);

const EULER_NUMBER = 2.71828;

var lotteryNumbers;
lotteryNumbers = [20, 34, 645, 01];
console.log(lotteryNumbers);

const CAPITAL_OF_ZAMBIA = "Lusaka";

asleep = true;
var asleep;
console.log(asleep);
