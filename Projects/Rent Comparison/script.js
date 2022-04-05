var cityRent1 = 1170;
var cityRent2 = 1000;

var isMoreExpensive = cityRent1 > cityRent2;
var comparisonLabel = "Paris is more expensive: " + " " + isMoreExpensive;
console.log(comparisonLabel);

var difference = cityRent1 - cityRent2;
var differenceLabel = "Rent difference: " + difference + " Euros";
console.log(differenceLabel);

document.getElementById("city1").innerHTML = "Paris Rent: " + cityRent1;
document.getElementById("city2").innerHTML = "Barcelona Rent: " + cityRent2;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;