var list = document.getElementById("parent");
var child = document.createElement("li");
child.innerHTML = "CarBot kit2";
list.appendChild(child);

var coffee = document.getElementById("coffeetypes");
var categoriesCoffee = document.createElement("li");
categoriesCoffee.innerHTML = "Cappuccino";
coffee.appendChild(categoriesCoffee);

var div1 = document.getElementById("div1");
var heading = document.createElement("h2");
heading.innerHTML = "Cookies. We need them.";
div1.appendChild(heading);

var heading2 = document.createElement("h2");
var marvin = document.createElement("p");
heading2.innerHTML = "Fictional Droids";
marvin.innerHTML = "Marvin the Paranoid Android";
div1.appendChild(heading2);
div1.appendChild(marvin);

var div2 = document.getElementById("div2");
var contentDiv2 = document.createElement("p");
contentDiv2.innerHTML = "Nested p element inside div2 container";
div2.appendChild(contentDiv2);
console.log(contentDiv2.innerHTML);

var headingSpotify = document.getElementById("platform");
var content_heading_spotify = headingSpotify.innerHTML;
console.log(content_heading_spotify);
var details_sp = document.getElementById("div3");
var details_spotify = document.createElement("h3");
details_spotify.innerHTML =
"Spotify is all the music you'll ever need. Millions of songs and podcasts. No credit card needed.";
details_sp.appendChild(details_spotify);
console.log(details_spotify.innerHTML);

var div4 = document.getElementById("div4");
var h3div4 = document.createElement("h2");
h3div4.innerHTML = "Some content";
div4.appendChild(h3div4);
var paragraph = document.createElement("p");
paragraph.innerHTML = "I would walk 500 miles";
div4.appendChild(paragraph);
console.log(paragraph.innerHTML);

var par2 = document.createElement("p");
par2.innerHTML = "Pancake stacks are the best";
div4.appendChild(par2);

var price = document.getElementById("children");
console.log(price.innerHTML);

console.log(document);

