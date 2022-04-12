var greet = function(user) {
    var div1 = document.getElementById("div1");
    var heading2 = document.createElement("h2");
    heading2.innerHTML = "Greetings!";
    div1.appendChild(heading2);
    console.log(div1.appendChild(heading2));
    return ("Hello " + user);
}
console.log(greet("John"));

var prices = [10,25,40];
console.log("Initial prices: ");
console.log(prices);
var halve = function(price) {
  return 0.5 * price;
}

var reduce = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(halve(arr[i]));
    }
}
console.log("Reduced  prices: ");
reduce(prices);
console.log("Count to five");
function countToFive() {
    var count = 1;
    while(count <=5) {
        console.log(count);
        count++;
    }
}
countToFive();