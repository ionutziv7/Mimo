function getMileage(mileage, miles) {
    return mileage + miles;
}
var mileage = 5000;
var miles = 100;

var newMileage = getMileage(mileage, miles);
console.log(newMileage);

function addMoney(value, amount) {
    return value + amount;
}
var value = 0;
var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 22);
console.log(value);