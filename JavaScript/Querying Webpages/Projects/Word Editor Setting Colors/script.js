var el = document.querySelector("#page");

function setColor() {
    var input = document.querySelectorAll("input")[0];
    el.style.color = input.value;
}
