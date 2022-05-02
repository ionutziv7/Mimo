var car = {
    mileage: 5000,
    drive: function(miles) {
        car.mileage += miles;
    } 
};
car.drive(100);
console.log(car.mileage);

// What is object-oriented programming?
// A programming style where we bundle related data and functionality
// When do we use OOP?
// When we want to keep track of a value as an object's property

var myPiggy = {
    value: 0,
    addMoney: function(amount) {
        myPiggy.value = myPiggy.value + amount;
    }
};
myPiggy.addMoney(100);
console.log(myPiggy.value);
