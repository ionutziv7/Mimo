function changeImage() {
    var el = document.querySelector("img");
    el.setAttribute("src", "https://mimo.app/r/kittles.png");
    console.log(el.getAttribute("src"));
}

function changeProfile() {
    var el = document.querySelector("#img2");
    el.setAttribute("src", "https://mimo.app/i/dog.png");
}

function changeType() {
    var el = document.querySelector("input");
    el.setAttribute("type", "range");
}

function updateElement() {
    var el = document.querySelector(".input2");
    el.setAttribute("placeholder", "1234");
}