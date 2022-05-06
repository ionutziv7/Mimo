/*function changeColor() {
    item.classList.toggle("pink");
    //item.removeEventListener("click", changeColor);
}
var item = document.querySelector("div");
item.addEventListener("click", changeColor);
*/

function changeWidth() {
    item.classList.toggle("width");
}

function changeHeight() {
    item.classList.toggle("height");
}

var item = document.querySelector("div");
var el = document.querySelectorAll("button");

el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);

el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);

function markDone() {
    itemOne.classList.toggle("done");
}
var itemOne = document.querySelector("#item-1");
itemOne.addEventListener("click", markDone);

function removeItem() {
    itemTwo.innerText = "";
}
var clearButton = document.querySelector(".btn");
var itemTwo = document.querySelector("#item-1");
clearButton.addEventListener("click", removeItem);