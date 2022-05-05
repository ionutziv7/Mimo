var el = document.querySelector("#page");
var link = el.querySelector("img");

function setColor() {
    var input = document.querySelectorAll("input")[0];
    el.style.color = input.value;
}

function setLink() {
    var input = document.querySelectorAll("input")[1];
    link.setAttribute("src", input.value);
}