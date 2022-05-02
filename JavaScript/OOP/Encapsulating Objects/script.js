// In OOP, we group together related data and functions in the same object. 
// We call this encapsulation and it's a key principle of OOP.
var car = {
    mileage: 12000,
    drive: function(miles) {
        car.mileage += miles;
    }
};

var rectangle = {
    base: 3,
    height: 4,
    getArea: function() {
        return rectangle.base * rectangle.height;
    }
};
rectangle.base = 10;
var area = rectangle.getArea();
console.log(area);