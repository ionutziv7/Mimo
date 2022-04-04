var firstName = "Megan";
var lastName = "Fox";
var username = "Username: " + firstName + " " + lastName;
console.log(username);

var characterName = "WeFox";
var character = "Character: " + characterName;
console.log(character);


document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;
