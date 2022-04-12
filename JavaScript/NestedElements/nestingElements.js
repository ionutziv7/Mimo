var list = document.getElementById("list");
var entry1 = document.createElement("li");
entry1.innerHTML = "Friends";
var entry2 = document.createElement("li");
entry2.innerHTML = "Amigos";
list.appendChild(entry1);
list.appendChild(entry2);
var body = document.getElementById("parent");
var magazine = document.createElement("h1");
magazine.innerHTML = "Wired";

function displayMagazine() {
  body.appendChild(magazine);
}
function undisplayMagazine() {
  body.removeChild(magazine);
}