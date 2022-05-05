var el = document.querySelector("p");

function toggleBold() {
    el.classList.toggle("bold");
}

function toggleItalic() {
    el.classList.toggle("italic");
}

function toggleUnderline() {
    el.classList.toggle("underline");
}

function addMonospace() {
    el.classList.add("grey-text", "mono"); 
}

function removeFormat() {
    el.classList.remove("bold", "italic", "underline", "center-text", "grey-text", "mono");
}
