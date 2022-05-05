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

function toggleUnderline() {
    el.classList.toggle("underline");
}

function toggleBold() {
    el.classList.toggle("bold");
}

function toggleItalic() {
    el.classList.toggle("italic");
}

function addMonospace() {
    el.classList.add("gray-text", "mono");
}

function removeFormat() {
    el.classList.remove("underline", "italic", "bold", "gray-text", "mono");
}
