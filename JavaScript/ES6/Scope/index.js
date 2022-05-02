function visitCountry() {
    var country = "Argentina";
    console.log(country);
}
visitCountry();

// we can't acces diary const
//function readDiary() {
//   const myDiary = "Dear diary, today..."; 
//}
//console.log(myDiary);
// ReferenceError: myDiary is not defined

let cityToVisit = "Salzburg";
function travel() {
    console.log("Let's go to " + cityToVisit);
}
travel();
console.log(cityToVisit);

if (10 === 10) {
    console.log("This space here is block scope ");
}

var age = 18;
var access = true;
if (age === 18) {
    var access = false;
}
console.log(access);

const drivingAge = 18;
let canDrive = false;
if(drivingAge === 18) {
    let canDrive = true;
}
console.log(canDrive);

for(let index = 1; index <= 3; index++) {
    console.log(" Let's ccount to three");
}
// console.log(index); index no longer available    
