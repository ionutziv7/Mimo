function addBold() {
    var el = document.querySelector("p");
    el.classList.add("bold");
}

function removeBold() {
    var el = document.querySelector("p");
    el.classList.remove("bold");
}

function toggleBold() {
    var el = document.querySelector("p");
    el.classList.toggle("bold");
}

function addClasses() {
    var el = document.querySelector("p");
    el.classList.add("highlight", "underline");
}

function removeClasses() {
    var el = document.querySelector("p");
    el.classList.remove("highlight", "underline");
}

function italic() {
    var el = document.querySelector("p");
    el.classList.add("italic");
}

function toggleItalic() {
    var el = document.querySelector("p");
    el.classList.toggle("italic");
}
function removeItalic() {
    var el = document.querySelector("p");
    el.classList.remove("italic");
}